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
        - `/data.nosync` 
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
            - `/engineering-jhu-edu`
                - `error_links.txt`
                - `success_links.txt`
                - `data.json` 
                - `prompt-completion-pairs.json`
            - `/krieger-jhu-edu`
                - `error_links.txt`
                - `success_links.txt`
                - `data.json` 
                - `prompt-completion-pairs.json`
            - `/library-jhu-edu`
                - `error_links.txt`
                - `success_links.txt`
                - `data.json` 
                - `prompt-completion-pairs.json`
            - `/combined`
                - `prompt-completion-pairs-combined.json`
        - `/api`
    - `/frontend`
    - `/notebooks`
        - `studentaffairs-jhu-edu.ipynb`
        - `ventures-jhu-edu.ipynb`
        - `e-catalogue-jhu-edu.ipynb`
        - `engineering-jhu-edu.ipynb`
        - `krieger-jhu-edu.ipynb`
        - `library-jhu-edu.ipynb`
        - `combine-json.ipynb`
    - `README.md`
    - `.gitignore`

## Statistics
### Summary
- Number of links scraped: 172,797
- Number of words scraped: 3,056,951,405
- Number of prompt-completion pairs created: 52,822,410
- Number of prompt-completion pairs used: 712,985
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
    - Number of links scraped: 10638
    - Number of words scraped: 122982232
    - Number of prompt-completion pairs created: 3557565
    - Number of prompt-completion pairs used: 53532
- ```krieger-jhu-edu```
    - Number of links scraped: 74502
    - Number of words scraped: 462771207
    - Number of prompt-completion pairs created: 16110435
    - Number of prompt-completion pairs used: 68428
- ```library-jhu-edu```
    - Number of links scraped: 63356
    - Number of words scraped: 447,067,436
    - Number of prompt-completion pairs created: 8830924
    - Number of prompt-completion pairs used: 342748

## File Notes
- ```.json``` - files are ignored due to their large file size.
    - ```data.json``` - contains the raw prompt-completion dataset.
    - ```prompt-completion-pairs.json``` - contains the cleaned prompt-completion dataset.
- In ```ventures-jhu-edu```, data scraped but blocked by Cloudfare is removed. 

## Known Issues
- The ```data.json``` of ```ventures.jhu.edu``` stopped prematurely but contains 635472 completion-prompt pairs.
- The ```data.json``` of ```e-catalogue.jhu.edu``` stopped prematurely but contains 21429394 completion-prompt pairs.
- The ```success_links.txt``` of ```engineering.jhu.edu``` stopped prematurely due to file size/storage issues but contains 10638 links. 
- The ```success_links.txt``` of ```library.jhu.edu``` stopped prematurely due to file size/storage issues but contains 63360 links.

_Last Updated:_ 06/14/2023

