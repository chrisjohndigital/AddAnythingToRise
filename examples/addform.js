const appSelector = '#app';
const containerSelector =  '.block-impact.block-impact--b .block-impact__quote';
const newContainerSelector = '.addform';
const formSelector = '.search_field';
//Add a form destination below
const formAction = '';
const newContainer = '<div class="addform"><form target="_blank" action="" method="get" enctype="application/x-www-form-urlencoded; charset=utf-8" onsubmit="return validateForm(this)"><label for="searchquery">Search term:</label><br><input class="search_field" name="searchquery" placeholder="Search" aria-label="Search term" required><input type="submit" value="Search" aria-label="Search"></form></div>';

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
function validateForm(target) {
    if (target.querySelector(formSelector)!=null) {
        if (target.querySelector(formSelector).value!='') {
            return true;
        } else {
            return false;
        }   
    } else {
        return false;
    }
}
function printLog(msg, urgency) {
    if (printAllLogMessages==true) {
        console.log (msg);
    }
}

addListener();