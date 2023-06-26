
import openai
import tiktoken
# initialize client
import clickhouse_connect

client = clickhouse_connect.get_client(
    host='msc-a8111894.us-east-1.aws.myscale.com',
    port=443,
    username='larrycai99',
    password='passwd_3GLKeGrPucrsAN'
)
GPT_MODEL = "gpt-3.5-turbo"


def strings_ranked_by_relatedness(query: str) -> list[str]:

    # creates embedding vector from user query
    embed = openai.Embedding.create(
        input=query,
        model="text-embedding-ada-002",
    )["data"][0]["embedding"]

    # query the database to find the top K similar content to the given query
    top_k = 10
    results = client.query(f"""
    SELECT id, text, distance(embedding, {embed}) as dist
    FROM default.hopkins
    ORDER BY dist
    LIMIT {top_k}
    """)
    # return list of most relevant results
    return results.named_results()
def num_tokens(text: str, model: str = GPT_MODEL) -> int:
    """Return the number of tokens in a string."""
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))


def query_message(
    query: str,
    model: str,
    token_budget: int
) -> str:
    """Return a message for GPT, with relevant source texts pulled from a dataframe."""
    strings = strings_ranked_by_relatedness(query)
    introduction = 'Use the below website information below to answer questions about the Johns Hopkins University. If the website information does not specify enough information, use previous knowledge to answer the question'
    question = f"\n\nQuestion: {query}"
    message = introduction
    for string in strings:
        next_article = f'\n\nJohns Hopkins article section:\n"""\n{string}\n"""'
        if (
            num_tokens(message + next_article + question, model=model)
            > token_budget
        ):
            break
        else:
            message += next_article
    return message + question


def ask(
    query: str,
    model: str = GPT_MODEL,
    token_budget: int = 4096 - 500,
    print_message: bool = True,
) -> str:
    """Answers a query using GPT and a dataframe of relevant texts and embeddings."""
    message = query_message(query, model=model, token_budget=token_budget)
    if print_message:
        print(message)
    messages = [
        {"role": "system", "content": "You answer questions about student affairs at the Johns Hopkins University"},
        {"role": "user", "content": message},
    ]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0
    )
    response_message = response["choices"][0]["message"]["content"]
    return response_message

#example question
openai.api_key = "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"
print(ask("What are some good travel abroad programs? "))