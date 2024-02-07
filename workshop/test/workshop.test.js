import { expect, test } from 'vitest';
import {getBrands} from "../src/exercice-1.js"
import {getBrandsLocalWeb} from "../src/exercice-2.js"
import { getScienceCQFD } from '../src/exercice-3.js';
import { getGrid } from '../src/exercice-4.js';
import { getDiffusionsByTaxonomy } from '../src/exercice-5.js';
import { getPaginatedGrid } from '../src/exercice-6.js';

test('Exercice 1', async () => {

  expect(new Set(await getBrands())).toEqual(new Set(['franceinfo', 'France Inter', 'France Musique', 'France Culture', "Mouv'", 'FIP', 'France Bleu']));
});


test('Exercice 2', async () => {

  expect(new Set(await getBrandsLocalWeb())).toEqual(new Set(['France Inter','franceinfo','France Musique','Classique Easy','Classique Plus','Concerts Radio France','Ocora Musiques du Monde','La Jazz','La Contemporaine','Musique de Films','La Baroque','Opéra','France Culture','Mouv\'','Mouv\' 100% Mix','Mouv\' Classics','Mouv\' DanceHall','Mouv’ RnB & Soul','Mouv\' Rap US','Mouv\' Rap Français','FIP','FIP Rock','FIP Jazz','FIP Groove','FIP Monde','FIP Nouveautés','FIP Reggae','FIP Electro','FIP Metal','FIP Pop','FIP Hip-Hop','France Bleu','France Bleu RCFM','France Bleu Alsace','France Bleu Armorique','France Bleu Auxerre','France Bleu Béarn Bigorre','France Bleu Belfort-Montbéliard','France Bleu Berry','France Bleu Besançon','France Bleu Bourgogne','France Bleu Breizh Izel','France Bleu Champagne-Ardenne','France Bleu Cotentin','France Bleu Creuse','France Bleu Drôme Ardèche','France Bleu Gard Lozère','France Bleu Gascogne','France Bleu Gironde','France Bleu Hérault','France Bleu Isère','France Bleu La Rochelle','France Bleu Limousin','France Bleu Loire Océan','France Bleu Sud Lorraine','France Bleu Mayenne','France Bleu Nord','France Bleu Normandie (Calvados - Orne)','France Bleu Normandie (Seine-Maritime - Eure)','France Bleu Orléans','France Bleu Pays d\'Auvergne','France Bleu Pays Basque','France Bleu Pays de Savoie','France Bleu Périgord','France Bleu Picardie','France Bleu Provence','France Bleu Roussillon','France Bleu Touraine','France Bleu Vaucluse','France Bleu Azur','France Bleu Lorraine Nord','France Bleu Poitou','France Bleu Paris','France Bleu Elsass','France Bleu Maine','France Bleu Occitanie','France Bleu Saint-Étienne Loire']));
});

test('Exercice 3', async () => {

  expect(await getScienceCQFD()).toEqual({
    "id": "dc59bf2c-a3f5-48b0-bd13-f7258761d52c_5",
    "title": "La Science, CQFD",
    "standFirst": "Une heure dédiée à toutes les sciences, et à leurs problématiques éthiques, politiques, économiques et sociétales qui font l’actualité."
  })
});


test('Exercice 4', async () => {

  expect(await getGrid()).toEqual([
    {
      "id": "b880384e-1e78-4eeb-ae21-62c3a42b0774_1",
      "track": {
        "id": "35d33907-cf97-4a89-b4eb-8bfac7951c86",
        "title": "Maddy <3",
        "performers": [
          "Yoa"
        ],
        "authors": [
          "Yoa",
          "Alexis Delong",
          "Tomasi"
        ],
        "trackNumber": 1
      }
    },
    {
      "id": "21c24d5e-9da2-49f7-81b7-7502022e61b5_1",
      "diffusion": {
        "id": "7507e609-2dd8-4f66-8736-fac4a231aa92_1",
        "title": "L'opossum : un mal aimé si attachant",
        "standFirst": "Mal aimé, il est le mal aimé ! On le dit sale, malodorant, fouilleur de poubelles et bourré de maladies. C’est pas juste et c’est pas vrai ! L’opossum est bien décidé à montrer ses qualités au monde entier et à restaurer son honneur. ",
        "show": {
          "id": "a80ecbd5-df3d-4c9d-bee7-4e3d9efc1974_1",
          "title": "Bestioles",
          "standFirst": "Les aventures du monde animal ! Le nouveau podcast pour les 5-7 ans"
        }
      }
    },
    {
      "id": "41094c6e-a45b-4d76-b4ca-65ba782f6d89_1",
      "track": {
        "id": "04ec5941-f15c-4331-81f5-252827533aa1",
        "title": "Lion tamer",
        "performers": [
          "KEVIN MORBY"
        ],
        "authors": [],
        "trackNumber": 5
      }
    }
  ])
});

test('Exercice 5', async () => {

  const diffusions = await getDiffusionsByTaxonomy();
  const getTaxonomiesFromNode = (node) => {
    if (!node.taxonomiesConnection || !node.taxonomiesConnection.edges) {
      return []
    };
  
    return node.taxonomiesConnection.edges.map(taxonomyEdge => taxonomyEdge.node.title);
  };
  
  const taxonomies = diffusions.edges.reduce((acc, edge) => {
    const node = edge.node;

    return [...acc, ...getTaxonomiesFromNode(node)];
  }, []);

  expect(taxonomies).toContain("Environnement");
});

test('Exercice 6', async () => {

  expect(new Set(await getPaginatedGrid())).toEqual(new Set(
    [
      "80037b1e-fafb-4a42-8e1f-47932f1e433b_4","8b2d413a-a542-4d7b-a0c7-7d8b1003f862_4","f0f63490-f873-446f-8ccc-5181690c5ba5_4","8be231a6-be9d-46f7-9550-f3de3510a7cb_4","cd300455-d565-4650-8988-7cd755d43299_4","00158124-740d-4804-b997-6d806f8f39dd_4","4eae8eb1-2a6f-47b6-b9c9-07cba2414be0_4","d02e6793-2358-49eb-bc1b-0cc2884b1c3c_4","cef3be73-e513-42f2-8cc1-59f046e5c58d_4","af1f4a71-8695-4335-8469-f3346d190a58_4","10b40036-15fb-4bf8-875f-13677f19603d_4","f9111ece-f5e8-4c75-8216-68dc07942805_4","84cd75f7-a20f-4240-96b0-d83fbaeea757_4","620fe641-3b0d-4ef2-be7e-8b8bcd5321ce_4","bdd40368-365c-40a4-bc43-4a770d49e761_4","7f3e48c5-ea78-46b5-ac8f-7dbb6c2796c6_4","54527f94-5326-47da-93dd-ff94104ca189_4","5ece9175-8a55-4b6d-a83c-e3b9625e92ba_4","cb674bf6-0fa9-4ebf-bc45-1eab3f0f3807_4","37beb9ea-8e85-40a2-8723-380fc9e0774a_4","94fffc55-1b30-4314-a73a-5f85d9fb023a_4","8beaf333-ddc5-4163-bc9f-c22d68ac02ba_4","6a728409-6867-404e-8ba7-ae31694384ba_4","1c9549b0-6dd6-41c9-9690-5c8f3bf055f6_4","30bf4f6d-5241-484e-8927-b5dcf2132b1e_4","828a2be9-a725-4adf-95a7-3eed0a6e59d9_4","b4bf76da-d8e1-4bab-a952-38cff281916f_4","af20d7b2-e9d5-42bc-bc1f-ef0e2ccfba99_4","2aa03d33-e985-4f30-96dc-09fb3fd8ee0a_4","542f40aa-f787-4420-933a-d2bc91d707a2_4","af36913e-336a-4ecf-ae0e-632b573eec33_4","841523e0-2c48-4afe-9a47-143889bc0429_4","b2c4f32b-ef1b-4fe9-9561-e4fce398b276_4","414ddb61-f41b-4043-8a8b-94ea5dae02e3_4","9c6879b0-4b22-41ae-9180-c76e69dfec6d_4","485bfd0a-bd2f-4bbc-92b7-4389e1733371_4","555f7729-41f7-4321-addb-e61a76c68efc_4","76ffd1de-2062-458f-bbaa-82ae3a17fdb2_4","967223cb-9b89-40c2-8bd9-3e6d3a3575fc_4","8ad00516-7abf-486f-b4ae-b846ec7a021c_4","549c3080-a43c-4cfa-ad4f-a9594f137a5c_4","1d28bd93-1120-4943-b49c-c510d0efe2e4_4","c4f5239a-08b5-4e4f-ba9b-5fcc3cb7495b_4","13fb4c36-9e6a-4963-a65b-b79087bc548f_4","421de9fb-ffce-42e6-aab4-123ad344b428_4","afc90b4e-59c8-4d83-8942-588588a74c66_4","ba0e9cd7-73e8-4550-a648-639fae590ae2_4","a55c3342-2b75-4a94-a217-8d6e6dc792a8_4","63ad7b4a-d9f8-4287-b799-32d4739ead84_4","073906e3-e60b-4a1e-b317-5eacd6ec027b_4","a929ba57-55ee-4581-9bbd-20cf053a0c02_4","525dbaa6-80e7-4e23-ad39-d11a69abd43e_4","a1f9e99b-c24b-43c0-b405-829daf922ab0_4","e01ca411-c440-45d4-9fe8-4e54c55bec70_4","1ba7165a-e4af-4af9-b905-ff392d307dd1_4","bddcbe62-bb3a-4502-a5d7-c654bd530c18_4","ce49eebb-5037-4d1d-871c-3d399e47deed_4","65439fec-6256-4835-9320-c799cee50942_4","e34dce4e-4b4d-4246-9a5a-564a5998c587_4","cb8ab300-5c0c-4c88-8b29-6065df218f86_4","1f1de490-b967-45a2-a2db-26f37f021a77_4","c95b22e7-534b-4caf-ab1b-a79dd3923ddf_4","605c4d33-bc96-4697-8971-899d7707e1f2_4","50cad463-43cf-4ede-b48b-c7d4ae43074e_4","d652c1d7-62da-43e4-a9af-585e0e14e959_4","fb5939a3-fa9c-4831-b657-5727bbe94f03_4","2a8905ec-a941-41e1-a5d2-582f3947ef76_4","cf2ea87f-f6d2-410c-9bdc-6993372d742b_4","0c926ee2-ad14-4202-8583-42f3a324e0f5_4","1553d9f8-be3b-4b1e-afca-8d9e509f92a0_4","6225dbda-cc7c-419e-91b3-4fd4e67115ec_4","7dadb812-7c16-4ebc-9d6b-8afff3b933a4_4","06c9238a-c45b-42e8-a0d3-35a01e87d22e_4","33f8f765-44f4-464d-a0db-981e63333250_4","51031349-a5ff-42a8-b229-3afeb92e7f21_4","16b57330-518b-4d27-a27e-ebe991d789a0_4","f926acc3-556b-4c40-a1b7-6f58c07efa04_4","0b9ce4df-e420-4d7d-bc2f-811afd6962ca_4","3982623d-67af-4326-858a-e33375835a06_4","92aed744-6ade-443e-b873-f1141f5ed097_4","62a72365-93df-48b7-8281-6cacbb1a8a94_4","5b07975a-5419-4c4c-a4e8-4d167eea2fc6_4","602a5cf4-6a97-4bde-9712-df95399f2cd9_4","84295c32-8b54-4b22-b79f-6f11a770f092_4","3861cd46-b851-47bb-94f4-4931cf47e900_4","681b5bfe-ac44-4c68-983e-ddf35ff0fc00_4","87d9e144-4e72-45b0-8b81-219800b253b5_4","9efd38ae-150d-4f6d-87b3-eee4f1718781_4","c94e900b-e72a-4517-b9a9-359806e17e8d_4","0bf5ce42-19a6-469c-a097-06d18398f23d_4","197771ae-7ca0-4b2d-ba36-098aba2dc459_4","9b4a1d50-09bc-4872-801d-4e6d23a1ee3f_4","f37ad694-b984-4697-bd67-d1141c270c2b_4","0b23649b-bf34-4636-beb1-63f44dd0081d_4","4b10f66d-d0b1-4b20-917a-721c8dc77100_4","3f101d80-2b74-4eb2-8568-d38438ce92e1_4","e93bdcc1-167f-4770-b550-5dad63ff7099_4","68817377-5a4f-4be5-b516-03aa21ca1780_4","392983b4-7d0a-41ba-ba7e-0eefd198e7ca_4","092d5c50-518c-4e96-9ae9-5792cec48ebf_4","0c364f6d-f8d7-4482-b50b-ada4cc379bef_4","d65be506-3115-4000-bc83-446d2fa7e1aa_4","335d92c7-ce8f-48c5-aaf5-3b6f2f35daf9_4","8e535684-95c4-4096-881e-52a509df56d2_4","483eb944-99ae-41a1-96e1-cb9c1faf57b0_4","4752b5b4-fe4c-4320-8422-d4eed9d0f9b7_4","3570f7ce-fa11-489b-bc7d-a7490e20720b_4","c0669f4e-c7bd-4ad0-8948-fe7f547257b3_4"
    ]
  ))
});
