import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().min(1).max(20).required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        "string.pattern.base": 'тільки слово',
        "string.min" : 'довжина слова менше 1',
        "string.max" : 'довжина слова більше 20'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        "number.min": "мінімальна ціна 1 ",
        "number.max" : 'максимальна ціна 1 000 000'
    }),
    year:Joi.number().min(1990).max(2024).required().messages({
        "number.min": "дуже стара",
        "number.max": "дуже нова?"
    })
})