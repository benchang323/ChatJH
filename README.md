# JHU Chatbot
## Description
Text goes here.

## Websites Scraped
1. [studentaffairs.jhu.edu](https://studentaffairs.jhu.edu/)
2. [ventures.jhu.edu](https://ventures.jhu.edu/)
3. [e-catalogue.jhu.edu](https://e-catalogue.jhu.edu/)
4. [engineering.jhu.edu](https://engineering.jhu.edu/) 
5. [krieger.jhu.edu](https://krieger.jhu.edu/) 
6. [library.jhu.edu](https://library.jhu.edu/) 

## Directory Structure
- `/root`
    - `/backend`
        - `/data`
            - `/studentaffairs-jhu-edu`
                - `data.json` 
                - `prompt-completion-pairs.json` 
                - `error_links.txt`
                - `success_links.txt`
            - `/ventures-jhu-edu`
                - `error_links.txt`
                - `success_links.txt`
                - `data.json` 
                - `prompt-completion-pairs.json` 
            - `/e-catalogue-jhu-edu`
                - `error_links.txt`
                - `success_links.txt`
                - `data.json` 
                - `prompt-completion-pairs.json` 
            - `/combined`
                - `data.json` 
                - `prompt-completion-pairs.json`
        - `/api`
    - `/frontend`
    - `/notebooks`
        - `studentaffairs-jhu-edu.ipynb`
        - `ventures-jhu-edu.ipynb`
        - `e-catalogue-jhu-edu.ipynb`
    - `README.md`
    - `.gitignore`

## Statistics
### Summary
- Number of links scraped: 24,301
- Number of words scraped: 2,024,130,530
- Number of prompt-completion pairs created: 24,323,486
- Number of prompt-completion pairs used: 248,277
### Subdomain Statistics
- ```studentaffairs-jhu-edu```
    - Number of links scraped: 9404
    - Number of words scraped: 195248892
    - Number of prompt-completion pairs created: 2258820
    - Number of prompt-completion pairs used: 48863
- ```ventures-jhu-edu```
    - Number of links scraped: 3136
    - Number of words scraped: 23147758
    - Number of prompt-completion pairs created: 635472
    - Number of prompt-completion pairs used: 12610
- ```e-catalogue-jhu-edu```
    - Number of links scraped: 11761
    - Number of words scraped: 1805733880
    - Number of prompt-completion pairs created: 21429394
    - Number of prompt-completion pairs used: 186804
- ```engineering-jhu-edu```
    - Number of links scraped:
    - Number of words scraped:
    - Number of prompt-completion pairs created: 
    - Number of prompt-completion pairs used:
- ```krieger-jhu-edu```
    - Number of links scraped:
    - Number of words scraped:
    - Number of prompt-completion pairs created: 
    - Number of prompt-completion pairs used:
- ```library-jhu-edu```
    - Number of links scraped:
    - Number of words scraped:
    - Number of prompt-completion pairs created: 
    - Number of prompt-completion pairs used:

## File Notes
- ```.json``` - files are ignored due to their large file size.
    - ```data.json``` - contains the raw prompt-completion dataset.
    - ```prompt-completion-pairs.json``` - contains the cleaned prompt-completion dataset.
- In ```ventures-jhu-edu```, data scraped but blocked by Cloudfare is removed. 

## Known Issues
- The ```data.json``` of ```ventures.jhu.edu``` stopped prematurely but contains 635472 completion-prompt pairs.
- The ```data.json``` of ```e-catalogue.jhu.edu``` stopped prematurely but contains 21429394 completion-prompt pairs.

_Last Updated:_ 06/14/2023

