# simplify-yokoso

simplify-yokoso est le module npm officiel pour [l'api yokoso](https://yokoso.ohori.me/). Il est basé sur le module npm [axios](https://www.npmjs.com/package/axios), et permets de faire des requêtes simples et rapides.

## Installation

installation avec npm

```bash
npm install simplify-yokoso
```

installation avec yarn

```bash
yarn add simplify-yokoso
```

## Exemple

usage

```js
const Yokoso = require("simplify-yokoso");
const yokoso = new Yokoso({ allowNSFW: false });
yokoso.get("social/hug", { only: "gif" }).then((res) => {
  console.log(res);
});
```

résultat

```js
{
  status: 202,
  message: 'OK',
  data: {
    name: 'sfw/social/hug/3232819571_1_2_ub8RQtBj.gif',
    url: 'https://storage.googleapis.com/yokoso-282918_bucket/sfw/social/hug/3232819571_1_2_ub8RQtBj.gif'
  }
}
```

## Documentation

| Parametre | défaut |                        description                         |           usage           | optionnel |
| :-------: | :----: | :--------------------------------------------------------: | :-----------------------: | :-------: |
| allowNSFW | false  |                  Autorise le contenu nsfw                  | allowNSFW : true \| false |    yes    |
|   token   |  none  | permets de suivre sa consommation de l'api et ses requêtes |      token : "token"      |    yes    |

## Documentation de l'api

Vous pouvez retrouver la documentation de l'api en cliquant [ici](https://yokoso-doc.ohori.me/).

## License

[MIT](https://github.com/Shaynlink/node-anemy/blob/master/LICENSE)
