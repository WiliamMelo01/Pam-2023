import {
    Food
} from "../model/Food";

const pizzas: Food[] = [new Food(1, 'Quatro queijos', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683504275/quatroQueijos_wjorlf.webp', 28.99, 1, 9.1, 'Pizza', 'Pizzaria do seu sé', 870,'Pizza com quatro tipos de queijo: mussarela, provolone, parmesão e gorgonzola',870,'1 unidade','Standard'),
    new Food(2, 'Margherita', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683504275/margherita_whzwas.webp', 31.49, 2, 8.8, 'Pizza', 'Pizzaria do seu sé', 470,'Pizza com molho de tomate, mussarela e manjericão',470,'1 unidade', 'Standard'), new Food(3, 'Mussarela', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507246/pizzaMussarela_oj546p.webp', 35, 2.5, 8.5, 'Pizza', 'Pizzaria do João', 10,'Pizza de mussarela com molho de tomate',850,'1 unidade','Express'),
    new Food(4, 'Calabresa', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507322/pizzaCalabresa_l8affs.jpg', 40, 4.0, 9.0, 'Pizza', 'Pizzaria da Maria', 12,'Pizza de calabresa com cebola, mussarela e molho de tomate',900,'1 unidade','Express'),
    new Food(5, 'Frango com Catupiry', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507379/pizzaFrangoCatupiry_aqifot.jpg', 45, 3.2, 8.7, 'Pizza', 'Pizzaria do Zé', 8,'Pizza de frango desfiado com catupiry, mussarela e molho de tomate.',820,'1 unidade','Standard'),
    new Food(6, 'Atum com Mussarela', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507379/pizzaFrangoCatupiry_aqifot.jpg', 38, 5.0, 7.8, 'Pizza', 'Pizzaria do Pedro', 5,'Pizza de atum com mussarela, cebola e molho de tomate.',700,'1 unidade','Express'),
    new Food(7, 'Quatro Queijos', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507629/pizzaQatroQueijos_lx0ril.webp', 42, 1.5, 9.5, 'Pizza', 'Pizzaria da Ana', 20,'Pizza com quatro tipos de queijo: mussarela, provolone, parmesão e gorgonzola.',950,'1 unidade','Standard'),
    new Food(8, 'Bacon', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507802/pizzaBacon_vgrjr6.jpg', 50, 6.5, 7.0, 'Pizza', 'Pizzaria do Luis', 15,'Pizza de bacon com mussarela, cebola e molho de tomate.',1250,'1 unidade','Express'),
    new Food(9, 'Tomate Seco', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507853/pizzaTomateSeco_xmamzq.webp', 36, 2.0, 8.0, 'Pizza', 'Pizzaria da Carla', 6,'Pizza com tomate seco, mussarela e manjericão.',780,'1 unidade','Express'),
    new Food(10, 'Pizza Portuguesa', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507899/pizzaPortuguesa_xj24bl.jpg', 44, 3.7, 9.2, 'Pizza', 'Pizzaria do Marcelo', 18,'Pizza portuguesa com presunto, mussarela, ovo, cebola, azeitona, pimentão e molho de tomate.',920,'1 unidade','Standard'),
    new Food(11, 'Palmito', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683507965/pizzaPalmite_ui41ld.jpg', 39, 2.8, 7.5, 'Pizza', 'Pizzaria do Rafael', 7,'Pizza de palmito com mussarela, azeitona e molho de tomate.',830,'1 unidade','Express'),
    new Food(12, 'Chocolate', 'https://res.cloudinary.com/dblxw7p0c/image/upload/v1683508006/pizzaChocolate_tvv1vi.jpg', 30, 1.0, 9.8, 'Pizza Doce', 'Pizzaria da Luana', 25,'Pizza doce com chocolate e granulado.',500,'1 unidade','Express'),
]

const sandwichs: Food[] = [
    new Food(13, "Cheeseburger", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683508611/chesseburger_kpudk0.webp", 10.99, 2, 4.5, "Hamburgers", "Burger Joint", 500),
    new Food(14, "Club Sandwich", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683508854/clubSandwich_ojge6c.jpg", 8.99, 3, 4.2, "Sanduíches", "Cafe", 300),
    new Food(15, "Reuben Sandwich", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509045/ReubenSandwich_wf7iuw.jpg", 7.99, 1, 4.0, "Sanduíches", "Deli", 200),
    new Food(16, "Grilled Cheese", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509293/grilledCheese_jq8tqh.webp", 6.99, 2.5, 4.1, "Sanduíches", "Cafe", 150),
    new Food(17, "Philly Cheesesteak", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509378/phillyCheesesteak_klkbym.webp", 12.99, 5, 4.6, "Sanduíches", "Steakhouse", 800),
    new Food(18, "Monte Cristo", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509420/monteCristo_itauq5.jpg", 9.99, 2, 4.3, "Sanduíches", "Cafe", 400),
    new Food(19, "Croque Monsieur", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509465/croqueMonsieur_vjcnvt.jpg", 11.99, 3.5, 4.4, "Sanduíches", "French Cafe", 600),
    new Food(20, "Pulled Pork Sandwich", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509514/pulledPorkSandwich_vn734v.jpg", 10.99, 4, 4.2, "Sanduíches", "BBQ Joint", 400),
    new Food(21, "Cubano Sandwich", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509615/cubanSandwich_hgjttt.jpg", 9.99, 2.5, 4.1, "Sanduíches", "Cuban Restaurant", 250),
    new Food(22, "BLT Sandwich", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683509553/bltSandwich_blbdvg.jpg", 7.99, 1.5, 3.9, "Sanduíches", "Deli", 200),
]

const pastas: Food[] = [
    new Food(23, "Espaguete à Carbonara", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510233/carbonara_pltegu.jpg", 14.99, 3, 4.5, "Massas", "Restaurante Italiano", 700),
    new Food(24, "Fettuccine Alfredo", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510255/Fettuccine-molho-Alfredo-Baixa-3_mnaqdh.jpg", 12.99, 2.5, 4.2, "Massas", "Restaurante Italiano", 600),
    new Food(25, "Lasanha", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510273/Lasagna_cx3nuo.jpg", 16.99, 4, 4.3, "Massas", "Restaurante Italiano", 800),
    new Food(26, "Penne à Bolonhesa", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510289/Penne-alla-Vodka-SQ_dzuuih.jpg", 11.99, 2, 4.0, "Massas", "Restaurante Italiano", 500),
    new Food(27, "Linguine com Molho de Vôngole", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510309/LinguineWithSauce_xjotwu.jpg", 15.99, 4.5, 4.6, "Massas", "Restaurante de Frutos do Mar", 900),
    new Food(28, "Ravióli com Molho de Tomate", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510336/cheese_ravioli_ten_minute_marinara-bf5356dc2d13a3bddef8b4665dd23bd0_sm6tgl.jpg", 13.99, 3.5, 4.1, "Massas", "Restaurante Italiano", 450),
    new Food(29, "Pappardelle com Molho Bolonhesa", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510353/PappardellewithBologneseSauce_oy87sx.jpg", 17.99, 4.5, 4.4, "Massas", "Restaurante Italiano", 850),
    new Food(30, "Farfalle com Molho Pesto", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510371/FarfelleWithPesto_sju70i.jpg", 10.99, 2, 4.2, "Massas", "Restaurante Italiano", 400),
    new Food(31, "Nhoque com Molho de Tomate", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510387/gnocchi-tomato-sauce-recipe_pzhieb.webp", 12.99, 3, 4.0, "Massas", "Restaurante Italiano", 550),
    new Food(32, "Tortellini com Molho Cremoso", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683510405/tortellini-with-creamy-mushroom-and-white-wine-sauce-105960-1_unmiuk.jpg", 14.99, 3.5, 4.3, "Massas", "Italian Restaurant", 700),
];

export const japaneseFood: Food[] = [
    new Food(33, "Sushi de salmão", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515663/sushiSalmao_ehwqm5.jpg", 35.90, 2.5, 4.8, "Comida japonesa", "Sushi House", 124),
    new Food(34, "Yakissoba de frango", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515687/yakisobaFrango_pjzfbd.jpg", 25.90, 1.5, 4.5, "Comida japonesa", "Restaurante Japonês", 86),
    new Food(35, "Temaki de atum", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515689/temakiAtum_iv0apg.jpg", 18.50, 2.0, 4.6, "Comida japonesa", "Sushi Bar", 98),
    new Food(36, "Uramaki de pepino", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515712/uramakiPepino_lb1nxl.png", 22.90, 1.8, 4.2, "Comida japonesa", "Sushi Time", 75),
    new Food(37, "Gyoza de carne", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515715/gyozaCarne_qeqc66.jpg", 17.90, 1.3, 4.0, "Comida japonesa", "Gyoza House", 62),
    new Food(38, "Missoshiro", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515735/missoshiro_w9mig2.jpg", 12.50, 1.0, 4.3, "Comida japonesa", "Restaurante Japonês", 48),
    new Food(39, "Harumaki de legumes", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515738/harumakiLegumes_uzy7hj.webp", 16.90, 1.5, 4.1, "Comida japonesa", "Sushi Bar", 57),
    new Food(40, "Sashimi de salmão", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515758/sahimiSalmao_v185zl.jpg", 42.90, 3.0, 4.9, "Comida japonesa", "Sushi Time", 145),
    new Food(41, "Yakisoba vegetariano", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515761/yakisobaVegano_jhqdrr.jpg", 23.50, 1.6, 4.4, "Comida japonesa", "Gyoza House", 79),
    new Food(42, "Tempurá de camarão", "https://res.cloudinary.com/dblxw7p0c/image/upload/v1683515780/tempuraCamaro_r7j5ap.jpg", 29.90, 2.3, 4.7, "Comida japonesa", "Sushi House", 112)
];

export const FOODS: Food[] = [...pizzas, ...sandwichs, ...pastas, ...japaneseFood,];