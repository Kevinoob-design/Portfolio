const delayInit = 3000

const delaysStringCollection = []

for (let i = 0; i < 1000; i++) {

    const delayString = `body[data-aos-delay="${delayInit + (50 * i)}"] [data-aos],
    [data-aos][data-aos][data-aos-delay="${delayInit + (50 * i)}"] {
        transition-delay: ${delayInit + (50 * i)}ms;
    }`

    delaysStringCollection.push(delayString)
}

console.log(delaysStringCollection.toString().replace(/,body/g, "body").split(" ").join(""))
