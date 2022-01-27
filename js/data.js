const items = document.getElementById ("items");
const template = document.getElementById ("template-card").content ;
const fragment = document.createDocumentFragment();


document.addEventListener ('DOMContentLoaded', ()=> {fetchData()});

const fetchData = async()=> {

    try {
        const res = await fetch ('api.json');
        const data = await res.json();
        pintarCards(data);
    }
    catch (error){
        console.log (error);
    }
}

const pintarCards = data=> {
    console.log (data)
}