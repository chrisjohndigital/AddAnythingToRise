//Top-level container for the Rise app
const appSelector = '#app';
//Rise block to enhance
const containerSelector =  '.block-impact.block-impact--b .block-impact__quote';
//Class name for new content to be added
const newContainerSelector = '.newcontent';
//HTML for new content, using the class name from above
const newContainer = '<div class="newcontent"><p>Hello World</p></div>'
//Print messages to the console or not
const printAllLogMessages = true;

function addListener() {
    if (window.MutationObserver) {
        const targetNode = document.querySelector(appSelector);
        if (targetNode!=null) {
            const observerOptions = {
                childList: true,
                subtree: true
            }
            printLog ('Adding Mutation Observer listener');
            const observer = new MutationObserver(observercallback);
            observer.observe(targetNode, observerOptions);
        }
    }
    searchForTargets();
}

function observercallback(mutationList, observer) {
    printLog ('MutationObserver: Node added', true);
    for(let mutation of mutationList) {
        if (mutation.type == 'childList') {
            if (document.querySelector(containerSelector)!=null) {
                searchForTargets();
            }
        }
    }
}
function searchForTargets() {
    printLog ('searchForTargets');
    let targets = document.querySelectorAll(containerSelector);
    if (targets.length!=0) {
        targets.forEach((target) => {
            if (target.querySelector(newContainerSelector)==null) {
                printLog ('Adding new content');
                addContent (target);
            } else {
                printLog ('Skipping because new content has already been added');
            }
        });
    }
}
function addContent(target) {
    printLog ('addContent');
    let node = document.createElement('div');    
    node.innerHTML = newContainer;
    target.append (node);
}
function printLog(msg, urgency) {
    if (printAllLogMessages==true) {
        console.log (msg);
    }
}

addListener();