const TimeLine = (create: Date, expire: Date) => {
    return (String(create.getFullYear()).slice(-2) + '-' +
        String(create.getMonth() + 1).padStart(2, '0') + '-' +
        String(create.getDate()).padStart(2, '0') + ' ~ ' +
        String(expire.getFullYear()).slice(-2) + '-' +
        String(expire.getMonth() + 1).padStart(2, '0') + '-' +
        String(expire.getDate()).padStart(2, '0'))
}

export default TimeLine;