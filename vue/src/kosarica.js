let kosarica = [];

const dodajUKosaricu = (proizvod) => {
    kosarica.push(proizvod);
};

const dohvatiKosaricu = () => {
    return kosarica;
};

export { dodajUKosaricu, dohvatiKosaricu };