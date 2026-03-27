# Introduction to Playwright

Hi 👋🏽!

Welcome to the course "Introduction to Playwright" by [Renata Andrade](https://testingwithrenata.com/) for the [Test Automation University](https://testautomationu.applitools.com/).

## Chapter 2 - Exercises

1. Change the number of workers on [playwright.config.ts](/playwright.config.ts) and see how it affects the tests run time. Use the command `npm run test:e2e:all` to run all the existing tests. Note that the number of workers will change too on the terminal. Suggestions: 1, 10, 100. What happens when you change it to 100?

**Answer:** Changing the number of workers is noted in the terminal output. A major speed difference isn't really seen since Playwright parallelizes at the file level, not the test level. 

1. Change the reporter to 2 different options of your preference (mouse hover "reporter" to see the valid options). Besides the HTML, which ones could be useful for a project and why?

**Answer:** Tried JSON and List for my 2. Many of these can be useful for a project depending on how you want your output formatted.

1. Change the value of trace for each option available and identify the differences between them. Note how the size of the folder changes for each option.

**Answer:** 
- Check `du -sh test-results/`
- Trace Off = 3.1M 
- Trace On = 58M and my fan got angry
- Trace on-first-retry = 13M
- Trace on-all-retries = 17M
- Trace retain-on-failure = 18M
- Trace retain-on-first-failure = 19M

1. Enable the video and check how it looks. Is it more useful than the trace in your opinion?

**Answer:** I think both of them are useful. Some of the videos are very short and will need to be watched at a slower speed to actually process it.

1. Create a new project on [playwright.config.ts](/playwright.config.ts), define a few unique settings and create a new script on [package.json](/package.json). Execute the new script. What useful params would make the test run even easier for you? Suggestion: Play with the different browsers and devices.

**Answer:** your mom. The `--project=yourmom` in particular was a useful param. 

1. Create a new test file, describe a simple new test case and implement a new test. What other locators did you use besides `getByRole` and `getByText`. How about assertions, what other LocatorAssertions did you use besides `toBeVisible`, `toHaveURL` and `not.toBeVisible`?

**Answer:** See other files

1. Open the [demo-todo-app.spec.ts](/tests-examples/demo-todo-app.spec.ts) and add a .only to one of the describes, run the tests. Use the command `npm run test:e2e:all`. Did it work?

**ANSWER:** With it, 3 failed 6 passed. Without it, 6 skipped and 79 passed. So yes, it did appear to work. 

1. Still in the [demo-todo-app.spec.ts](/tests-examples/demo-todo-app.spec.ts) revert the .only and add a new tag to some of the tests/describes. Update the script `test:e2e:smoke` in [package.json](/package.json) to use the new tag. Did it work?

**Answer:** yeah


💡 Share on LinkedIn something interesting you've learned! Don't forget to tag me [Renata Andrade](https://www.linkedin.com/in/raptatinha/).

**Answer:** no

If you have questions, feel free to post them on [github](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭!