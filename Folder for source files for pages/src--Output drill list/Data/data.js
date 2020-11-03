import drills from './drills.json'

const getData = () => {
    let all_drills = [];
    let id = 1;
        drills.forEach(element => {
            element["id"] = id;
            all_drills.push(element);
            id++;
        });
    return all_drills;
};

export { getData }