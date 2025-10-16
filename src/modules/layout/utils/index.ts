export const GetDate = ()=>{
    const time = new Date;
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const second = time.getSeconds();

    return { hour, minutes, second };
};