async function vulcanEngine() {
    const data = await browser.storage.local.get(['v_user', 'v_pass', 'v_auto', 'v_school']);
    
    if (!data.v_user || !data.v_pass) {
        console.log("zaloguj vulcana: Nie znaleziono danych logowania.");
        return;
    }

    // Logowanie
    const userField = document.getElementById("Alias");
    const nextButton = document.getElementById("btNext");
    if (userField && nextButton) {
        userField.value = data.v_user;
        console.log("Uzupełnianie emaila...");
        setTimeout(() => nextButton?.click(), 400);
    }

    const passField = document.getElementById("Password");
    const loginButton = document.getElementById("btLogOn");
    if (passField && loginButton) {
        passField.value = data.v_pass;
        console.log("Uzupełnianie hasła...");
        setTimeout(() => loginButton?.click(), 400);
    }

    // Wybieranie szkoły
    if (data.v_auto && data.v_school && window.location.href.includes("eduvulcan.pl")) {
        const accessList = document.querySelector('.access-list.mt-5');
        if (!accessList) return;

        const schoolLinks = accessList.querySelectorAll('a');
        for (let link of schoolLinks) {
            const nameDiv = link.querySelector('.connected-account-name');
            
            if (nameDiv) {
                const textContent = nameDiv.innerText.toLowerCase();
                const targetSearch = data.v_school.toLowerCase();

                if (textContent.includes(targetSearch)) {
                    console.log("Znaleziono Szkołe!: " + textContent);
                    link.click();
                    break;
                }
            }
        }
    }
}

setInterval(vulcanEngine, 1000);