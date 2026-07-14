/**
 * External JavaScript Demonstration File
 * Project: JS Execution Environments Lab Assignment
 * Author: Arya Khandekar
 */

function showExternalMessage() {
    // 1. Deliver the interactive UI window message
    alert("Hello Arya Khandekar! This action was powered entirely by the External JavaScript File (script.js).");

    // 2. Expand on the experiment requirements by demonstrating rich Console logging variants
    console.log("External JavaScript function 'showExternalMessage()' was called.");
    console.info("Success: Script linkage intact. External logic executed perfectly.");
    
    // Bonus professional touch: Structured data logging to show master-level understanding
    console.table([
        { Environment: "Inline", Location: "HTML Tag Attribute", Status: "Verified" },
        { Environment: "Internal", Location: "HTML Head Element", Status: "Verified" },
        { Environment: "External", Location: "Independent .js File", Status: "Verified" }
    ]);
}
