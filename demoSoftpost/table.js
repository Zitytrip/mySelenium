var tableCells = driver.findElements(By.tagName(“ //table//td”));

            tableCells.then(function(elements) {

                console.log(“Total number of cells - > ”+elements.length + “\n”);

                //Print data from each cell
                for (var i = 0; i < elements.length; i++) {
                    elements[i].getText().then(function(txt) {
                        console.log(txt + “\n”);
                    });
                }
            });