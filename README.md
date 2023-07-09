# JHU Chatbot

## Description

JHU Chatbot is a GPT-3.5-turbo based chatbot fined-tuned on more than 3 trillion scraped texts from 6 subdomains of the Johns Hopkins University website. The chatbot is able to answer questions about the university, its programs, and its policies.

Version: 0.1.0 (Beta). Created by Benjamin Chang and Larry Cai.

## Sample Questions

### Course Suggestions

> **User:** What class should I take if I want to learn about Natural Language Processing?

> **JHU Chatbot:** EN.601.465 Natural Language Processing

### Policies and Procedures

> **User:** I have been accused of academic dishonesty for the first time. What should I do to resolve my case?

> **JHU Chatbot:** If you have been accused of academic dishonesty for the first time and you believe you are innocent, you should promptly review the facts of the case with the faculty member responsible for the course in which the misconduct allegedly occurred. If the faculty member believes that academic misconduct has occurred, the faculty member must first contact the Director of Advising or another member of Academic Affairs to determine whether the offense is a first offense. If it is a first offense, the faculty member may settle the case directly with you, i.e., the faculty member and you may reach an agreement on the resolution of the alleged misconduct.

## Websites Scraped

1. [studentaffairs.jhu.edu](https://studentaffairs.jhu.edu/)
2. [ventures.jhu.edu](https://ventures.jhu.edu/)
3. [e-catalogue.jhu.edu](https://e-catalogue.jhu.edu/)
4. [engineering.jhu.edu](https://engineering.jhu.edu/)
5. [krieger.jhu.edu](https://krieger.jhu.edu/)
6. [library.jhu.edu](https://library.jhu.edu/)

## Directory Structure

- `/root`
  - `/backend` (See README.md in /backend)
  - `/frontend` (See README.md in /frontend)
  - `/notebooks`
    - `studentaffairs-jhu-edu.ipynb`
    - `ventures-jhu-edu.ipynb`
    - `e-catalogue-jhu-edu.ipynb`
    - `engineering-jhu-edu.ipynb`
    - `krieger-jhu-edu.ipynb`
    - `library-jhu-edu.ipynb`
    - `combine-json.ipynb`
    - `create_embeddings.ipynb`
  - `README.md`
  - `.gitignore`

## Statistics

### Summary

- Number of links scraped: 172,797
- Number of words scraped: 3,056,951,405
- Number of prompt-completion pairs created: 52,822,410
- Number of prompt-completion pairs used: 712,985

### Subdomain Statistics

- `studentaffairs-jhu-edu`
  - Number of links scraped: 9404
  - Number of words scraped: 195248892
  - Number of prompt-completion pairs created: 2258820
  - Number of prompt-completion pairs used: 48863
- `ventures-jhu-edu`
  - Number of links scraped: 3136
  - Number of words scraped: 23147758
  - Number of prompt-completion pairs created: 635472
  - Number of prompt-completion pairs used: 12610
- `e-catalogue-jhu-edu`
  - Number of links scraped: 11761
  - Number of words scraped: 1805733880
  - Number of prompt-completion pairs created: 21429394
  - Number of prompt-completion pairs used: 186804
- `engineering-jhu-edu`
  - Number of links scraped: 10638
  - Number of words scraped: 122982232
  - Number of prompt-completion pairs created: 3557565
  - Number of prompt-completion pairs used: 53532
- `krieger-jhu-edu`
  - Number of links scraped: 74502
  - Number of words scraped: 462771207
  - Number of prompt-completion pairs created: 16110435
  - Number of prompt-completion pairs used: 68428
- `library-jhu-edu`
  - Number of links scraped: 63356
  - Number of words scraped: 447,067,436
  - Number of prompt-completion pairs created: 8830924
  - Number of prompt-completion pairs used: 342748

## File Notes

- `data.json` - contains the raw prompt-completion dataset.
- `prompt-completion-pairs.json` - contains the cleaned prompt-completion dataset.

## Known Issues

- When craeting `data.json` of `ventures.jhu.edu`, program stopped prematurely but contains 635472 completion-prompt pairs.
- When creating `data.json` of `e-catalogue.jhu.edu`, program stopped prematurely but contains 21429394 completion-prompt pairs.
- When creating `success_links.txt` of `engineering.jhu.edu`, program stopped prematurely due to file size/storage issues but contains 10638 links.
- When creating `success_links.txt` of `library.jhu.edu`, program stopped prematurely due to file size/storage issues but contains 63360 links.

## Disclaimer

JHU Chatbot is not affiliated with Johns Hopkins University. All information generated by JHU Chatbot is not guaranteed to be accurate. JHU Chatbot and its creaters are not responsible for any misinformation generated by the chatbot.

_Last Updated:_ 07/09/2023
