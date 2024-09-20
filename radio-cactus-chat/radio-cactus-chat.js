$(document).ready(function() {
    // check index
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        insertCactusButton();
        addCactusResources(); // add JavaScript and CSS for Cactus Comments
    }
});

function insertCactusButton() {
    let cactusButton = `
        <div class="button-wrapper" id="cactus-button-wrapper" style="display: flex; justify-content: center; background-color: rgba(6, 6, 4, 0.75); padding: 10px;">
            <button id="toggleCactus" class="cactus-button bg-color-2" style="border-radius: 12px; width: 300px; height: 40px; display: flex; align-items: center; justify-content: center; background-color: var(--color-4)">
                <strong style="margin: 0 auto;">Comment Cactus</strong>
            </button>
        </div>
        <div id="cq-header" style="background-color: rgba(6, 6, 4, 0.75);">
            <div id="cactus-container" style="display: none; margin: auto; max-width: 80%;">
                <div id="comment-section"></div>
            </div>
        </div>
    `;

    $('body').append(cactusButton);

    $('#toggleCactus').click(function() {
        $('#cactus-container').toggle();
        if ($('#cactus-container').is(':visible')) {
            loadCactusWidget();
        }
    });
}

function addCactusResources() {
    if (!$('head').find('link[href="https://latest.cactus.chat/style.css"]').length) {
        let cactusStylesheet = document.createElement('link');
        cactusStylesheet.rel = 'stylesheet';
        cactusStylesheet.href = 'https://latest.cactus.chat/style.css';
        cactusStylesheet.type = 'text/css';
        document.head.appendChild(cactusStylesheet);
    }

    if (!$('head').find('script[src="https://latest.cactus.chat/cactus.js"]').length) {
        let cactusScript = document.createElement('script');
        cactusScript.type = 'text/javascript';
        cactusScript.src = 'https://latest.cactus.chat/cactus.js';
        document.head.appendChild(cactusScript);
    }
}

function loadCactusWidget() {
    if (!window.cactusLoaded) {
        initComments({
            node: document.getElementById("comment-section"),
            defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
            serverName: "cactus.chat",
            siteName: "<test-test-test>", // <-- !!! Here enter the name of your site registered at https://cactus.chat/docs/getting-started/introduction/
            commentSectionId: "!GQHwAtFWNQewIFJXrS", // <-- !!! paste unique id here. you will find them in the room settings.
            // Then click on advanced options.
            loginEnabled: true,
            guestPostingEnabled: true,
        });
        window.cactusLoaded = true;

        // setInterval
        let intervalId = setInterval(function() {
            let loginButton = document.querySelector('.cactus-login-button');
            let sendButton = document.querySelector('.cactus-send-button');
            let cactusLoginForm = document.querySelector('.cactus-login-form');
            let matrixButton = document.querySelector('.cactus-matrixdotto-button');
            let matrixLogin = document.querySelector('.cactus-login-credentials-button');

            // Select all input elements
            let inputElements = document.querySelectorAll('input');

            // Reset width for all input elements
            inputElements.forEach(function(input) {
                input.style.width = 'auto';
            });

            if (loginButton) {
                loginButton.style.backgroundColor = 'var(--color-4)';
            }

            if (sendButton) {
                sendButton.style.backgroundColor = 'var(--color-4)';
            }

            if(cactusLoginForm) {
                cactusLoginForm.style.backgroundColor = 'var(--color-2)';
            }

            if(matrixButton) {
                matrixButton.style.backgroundColor = 'var(--color-4)';
            }

            if(matrixLogin) {
                matrixLogin.style.backgroundColor = 'var(--color-4)';
            }


            if (loginButton && sendButton && cactusLoginForm && matrixButton && matrixLogin && inputElements.length > 0) {
                clearInterval(intervalId);
            }
        }, 500); // check 500 ms
    }
}



