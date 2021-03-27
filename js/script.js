{

    let tests = [false, false, false, false, false, false, false, false, false, false];
    // 0    1    2         3     4       5      6      7      8        9

    // let tests = [true, true, true, true, true, true, true, true, true, true];

    // filteren op true
    const ifTestsTrue = () => tests.filter(waarde => waarde === true);



    // als ze een 10 halen
    const ifTen = () => {
        document.querySelector(`.tohide`).classList.remove(`hidden`);
        document.querySelector(`.score-explanation`).remove(`.score-explanation`);
        document.querySelector(`.container-no-ten`).classList.remove(`.container-no-ten`);
    }


    const checkTests = () => {
        const result = ifTestsTrue();
        console.log(result);
        if (result.length === 10) {
            ifTen();
        }

        // resultaat tonen
        document.querySelector(`.score-amount`).textContent = result.length;
        document.querySelector(`.start-score`).textContent = result.length;
    }


    // 1. cirkel vervangen
    const handleClickCircle = e => {
        // boolean omzetten naar true
        tests[0] = true;
        // resultaat tonen
        checkTests();


        // afbeelding ophalen en vervangen
        document.querySelector(`.img__circle`).setAttribute(`src`, `assets/img/circle.svg`);
    }

    //2. abc vervangen
    const handleClickAbc = e => {
        // boolean omzetten naar true
        tests[1] = true;
        // resultaat tonen
        checkTests();


        // afbeelding ophalen en vervangen
        document.querySelector(`.abc`).setAttribute(`src`, `assets/img/abc-fix.svg`);
    }


    //3. icecream vervangen
    const handleClickIcecream = e => {
        // boolean omzetten naar true
        tests[2] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en vervangen
        document.querySelector(`.icecream`).setAttribute(`src`, `assets/img/icecream-fix.svg`);
    }

    //4. line-door vervangen
    const handleClickLinedoor = e => {
        // boolean omzetten naar true
        tests[3] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en vervangen
        document.querySelector(`.line-door`).setAttribute(`src`, `assets/img/line-door.svg`);
    }

    //5. Stuk uit lijst vervangen
    const handleClickList = e => {
        // boolean omzetten naar true
        tests[4] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en verwijderen
        document.querySelector(`.list__item--smallheight`).remove(`.list__item--smallheight`);
    }

    //6. A vervangen
    const handleClickA = e => {
        // boolean omzetten naar true
        tests[5] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en vervangen
        document.querySelector(`.img__a`).setAttribute(`src`, `assets/img/a-fix.svg`);
    }

    //7. lijn vervangen
    const handleClickBeetjeNetNiet = e => {
        // boolean omzetten naar true
        tests[6] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en vervangen
        document.querySelector(`.img__beetje-netniet`).setAttribute(`src`, `assets/img/beetje-net-niet-fix.svg`);
    }

    //8. lijn vervangen
    const handleClickLine = e => {
        // boolean omzetten naar true
        tests[7] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en vervangen
        document.querySelector(`.line`).setAttribute(`src`, `../assets/img/line-fix.svg`);
    }

    //9. lijn vervangen
    const handleClickFourSquares = e => {
        // boolean omzetten naar true
        tests[8] = true;
        // resultaat tonen
        checkTests();

        // afbeelding ophalen en vervangen
        document.querySelector(`.four__squares`).setAttribute(`src`, `assets/img/four-squares-fix.svg`);
    }

    //10. lijn vervangen
    const handleClickGolfbal = e => {
        // boolean omzetten naar true
        tests[9] = true;
        // resultaat tonen
        checkTests();
        // als 10/10

        // afbeelding ophalen en vervangen
        document.querySelector(`.golfbal`).setAttribute(`src`, `assets/img/golfbal-in-hole.svg`);
    }


    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(e);
        // tonen dat email is verstuurd 
        document.querySelector(`.form`).innerHTML =
            `                <div class="form__send">
                    <p class="subtitle form__subtitle">
                        Uw e-mail is verzonden. U krijgt binnen enkele seconden uw toegangspas.
                    </p>
                </div>`;
    }



    const init = () => {
        // verwijderen van grid score
        // AAN OF UIT ZETTEN OM TE ONTWERPEN
        document.querySelector(`.tohide`).classList.add(`hidden`);

        // uitleg naar slecht resultaat
        const $finalScore = document.querySelector(`.final__score`);
        const $p = document.createElement(`p`);
        $p.classList.add(`score-explanation`);
        $p.classList.add(`bodytext`);
        $p.textContent = `U heeft geen 10.
        NetNiet is niet de wereld voor jou.`;
        // TERUG AANZETTEN
        $finalScore.appendChild($p);


        // luisteren naar het verzenden van het formulier
        const $form = document.querySelector(`.form-general`);
        $form.addEventListener(`submit`, handleSubmitForm);


        // 1. 
        document.querySelector(`.circle`).addEventListener(`click`, handleClickCircle);

        // 2. 
        document.querySelector(`.abc`).addEventListener(`click`, handleClickAbc);

        // 3. 
        document.querySelector(`.icecream`).addEventListener(`click`, handleClickIcecream);

        // 4. 
        document.querySelector(`.line-door`).addEventListener(`click`, handleClickLinedoor);

        // 5.
        document.querySelector(`.list`).addEventListener(`click`, handleClickList);

        // 6.
        document.querySelector(`.img__a`).addEventListener(`click`, handleClickA);

        // 7.
        document.querySelector(`.img__beetje-netniet`).addEventListener(`click`, handleClickBeetjeNetNiet);

        // 8.
        document.querySelector(`.line`).addEventListener(`click`, handleClickLine);

        //9.
        document.querySelector(`.four__squares`).addEventListener(`click`, handleClickFourSquares);

        // 10.
        document.querySelector(`.golfbal`).addEventListener(`click`, handleClickGolfbal);






    };


    init();
}