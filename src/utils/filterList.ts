export default function filterList(list : {name: string, url: string}[], value: string) {
    if(value === ''){
        return [...list]
    }else {
        return [...list.filter(location => location.name.includes(value))]
    }
}