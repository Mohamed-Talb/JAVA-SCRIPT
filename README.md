# JAVASCRIPT POOL - ZONE 01

This repository contains EXERCISES and SOLUTIONS for the JS POOL. It is structured to help students PRACTICE JAVASCRIPT concepts and test their code efficiently. All exercises are organized to match the POOL workflow.


## **REPOSITORY STRUCTURE**

The repository is divided into three main FOLDERS: **POOL-EXERCICES**, **POOL-SOLUTIONS**, and **TEST**. **POOL-EXERCICES** contains EXERCISE instructions as README.md files. Opening these in VSCode with `Ctrl+Shift+V` provides a clean MARKDOWN preview. **POOL-SOLUTIONS** stores your JS SOLUTIONS, following the same folder structure. **TEST** includes a TESTER to validate solutions.

```text
POOL-EXERCICES/
POOL-SOLUTIONS/
TEST
```


## **POOL-EXERCICES**

Each EXERCISE has a README.md explaining the TASK. Instructions include requirements, examples, and expected outputs. 
**NOTE** For a more efficient experience, open the Exercices README in **VSCode** and press `Ctrl+Shift+V` to view it in MARKDOWN preview mode. You can also `Ctrl+Click` on links to open them directly. Always read the instructions carefully before coding.

## **POOL-SOLUTIONS**

This FOLDER stores your JS SOLUTIONS corresponding to exercises. Use the same folder and file names as in POOL-EXERCICES to simplify TESTING. Keep code CLEAN and readable.

## **TEST**

The TESTER validates your SOLUTIONS automatically. It supports both STANDARD JS exercises and DOM-based exercises. DOM exercises require PUPPETEER and a local HTTP SERVER.

### **REQUIREMENTS**

* NODE.JS v14+
* NPM
* CHROMIUM dependencies (handled automatically by PUPPETEER)

### **INSTALLATION**

```bash
git clone https://github.com/01-edu/public.git
cd public/js/tests
npm install puppeteer
```

### **RUNNING TESTS**

Standard usage:

```bash
node test.mjs <solution-path> <exercise-name>
```

Example:

```bash
node test.mjs ~/piscine-js/1-Loop how-2-js
```

* `<solution-path>` → Path to POOL-SOLUTIONS
* `<exercise-name>` → Exercise folder & file name (without `.js`)

DOM exercises ending with `-dom` start a local HTTP SERVER and run browser-based assertions automatically.

## **TIPS FOR SUCCESS**

Always match your SOLUTION folder names to EXERCISE folder names. Test code locally before submitting. Use VSCode MARKDOWN preview for EXERCISES for better readability. Keep code simple and readable.

