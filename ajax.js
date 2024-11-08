document.addEventListener("DOMContentLoaded", () => {
    Med();
});
async function Med(){
    const jax = [

        {
            "name": "Moses Okode",
            "age": 23,
            "country": "Kenya",
            "school": "Technical University of Kenya",
            "grade": ["A", "A", "A"]        
        },
        {
         "name": "Phenna John",
            "age": 32,
            "country": "Kenya",
            "school": "Kenyatta University",
            "grade": ["A", "B", "B"]    
        },
        {
            "name": "Irene Jones",
            "age": 37,
            "country": "Kenya",
            "school": "University of Nairobi",
            "grade": ["A", "B", "A"] 
        },
        {
            "name": "Melsa Okode",
            "age": 23,
            "country": "Kenya",
            "school": "Technical University of Kenya",
            "grade": ["A", "B", "C"] 
        }
    
    
    ];
    ajax(jax);
//console.log(jax);

}
function ajax(obj){
    const hdd = document.querySelector("header");
    const hh1 = document.createElement("h1");
    hh1.textContent = "This is the json file data";
    hdd.appendChild(hh1);

    obj.forEach(item => {
        const p = document.createElement("p");
        p.innerHTML = ` Name; ${item.name}, Age: ${item.age}, Country: ${item.country}, School: ${item.school}, Grade: ${item.grade}`;        
        hdd.appendChild(p);
        
    });
    
    

}
