export const readableDate = (date) => {
    let data = new Date(date);
    let dataFormatada = ("0" + data.getDate()).substr(-2) + "-"
        + ("0" + (data.getMonth() + 1)).substr(-2) + "-" + data.getFullYear();
    return dataFormatada
}

