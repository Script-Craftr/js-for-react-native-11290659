
const createUserProfiles = (names,modifiedStringArr) => {
    return names.map((name,index) => {
        return(
            {
                originalName: name,
                modifiedName: modifiedStringArr[index],
                id: index + 1
            }
        )
            
        
    })
}

const result = createUserProfiles(["Kal", "Dom", "JORDYN"], ["Kal-El", "Dominik", "jordyn"]);
console.log(result);