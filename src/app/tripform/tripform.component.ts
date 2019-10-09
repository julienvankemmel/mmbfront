import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../country.service';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';


/**
 * url pour récupérer le pays par nom choisi dans le select
 */
const urlPays = 'https://restcountries.eu/rest/v2/name/';


@Component({
  selector: 'app-tripform',
  templateUrl: './tripform.component.html',
  styleUrls: ['./tripform.component.css']
})
export class TripformComponent implements OnInit {

  /**
   * déclaration des variables
  */



  public liste: any;

  public selectedPays = '';

  

  /**
 * action quand l'utilisateur va choisir un pays dans le select
 */
  selectChangeHandler(event: any) {

  /**
   * event handler pour récupérer le pays choisi
   */
  this.selectedPays = event.target.value;
  console.log(this.selectedPays);

}
  
  constructor( private loginService: LoginService, private userService: UserService,
    private route: ActivatedRoute, public http: HttpClient, public router: Router,
     public countryService: CountryService, public tripService: TripService) {

      // construction du formulaire
      this.tripForm = new FormGroup({
        name: new FormControl('', Validators.minLength(2)),
        startDate: new FormControl('', ),
        endDate: new FormControl('', ),
        content: new FormControl('', )
        });
      
/**
* ActivatedRoute permet de récuperer l'ID
*/
this.route.params.subscribe( params => this.id = params.id);

}


// récupération de la valeur des inputs

get name() { return this.tripForm.get('name'); }

get startDate() { return this.tripForm.get('startDate'); }

get endDate() { return this.tripForm.get('endDate'); }

get content() { return this.tripForm.get('content'); }


tripForm: FormGroup;
loading: boolean;
error: string;
user: any;
id: any;


ngOnInit() {

  this.liste = [
    {"id":0,"name":"","alpha2":"","alpha3":""},
    {"id":1,"name":"Afghanistan","alpha2":"af","alpha3":"afg"},
    {"id":2,"name":"Afrique du Sud","alpha2":"za","alpha3":"zaf"},
    {"id":3,"name":"Albanie","alpha2":"al","alpha3":"alb"},
    {"id":4,"name":"Algérie","alpha2":"dz","alpha3":"dza"},
    {"id":5,"name":"Allemagne","alpha2":"de","alpha3":"deu"},
    {"id":6,"name":"Andorre","alpha2":"ad","alpha3":"and"},
    {"id":7,"name":"Angola","alpha2":"ao","alpha3":"ago"},
    {"id":8,"name":"Antigua-et-Barbuda","alpha2":"ag","alpha3":"atg"},
    {"id":9,"name":"Arabie saoudite","alpha2":"sa","alpha3":"sau"},
    {"id":10,"name":"Argentine","alpha2":"ar","alpha3":"arg"},
    {"id":11,"name":"Arménie","alpha2":"am","alpha3":"arm"},
    {"id":12,"name":"Australie","alpha2":"au","alpha3":"aus"},
    {"id":13,"name":"Autriche","alpha2":"at","alpha3":"aut"},
    {"id":14,"name":"Azerbaïdjan","alpha2":"az","alpha3":"aze"},
    {"id":15,"name":"Bahamas","alpha2":"bs","alpha3":"bhs"},
    {"id":16,"name":"Bahreïn","alpha2":"bh","alpha3":"bhr"},
    {"id":17,"name":"Bangladesh","alpha2":"bd","alpha3":"bgd"},
    {"id":18,"name":"Barbade","alpha2":"bb","alpha3":"brb"},
    {"id":19,"name":"Biélorussie","alpha2":"by","alpha3":"blr"},
    {"id":20,"name":"Belgique","alpha2":"be","alpha3":"bel"},
    {"id":21,"name":"Belize","alpha2":"bz","alpha3":"blz"},
    {"id":22,"name":"Bénin","alpha2":"bj","alpha3":"ben"},
    {"id":23,"name":"Bhoutan","alpha2":"bt","alpha3":"btn"},
    {"id":24,"name":"Bolivie","alpha2":"bo","alpha3":"bol"},
    {"id":25,"name":"Bosnie-Herzégovine","alpha2":"ba","alpha3":"bih"},
    {"id":26,"name":"Botswana","alpha2":"bw","alpha3":"bwa"},
    {"id":27,"name":"Brésil","alpha2":"br","alpha3":"bra"},
    {"id":28,"name":"Brunei","alpha2":"bn","alpha3":"brn"},
    {"id":29,"name":"Bulgarie","alpha2":"bg","alpha3":"bgr"},
    {"id":30,"name":"Burkina Faso","alpha2":"bf","alpha3":"bfa"},
    {"id":31,"name":"Burundi","alpha2":"bi","alpha3":"bdi"},
    {"id":32,"name":"Cambodge","alpha2":"kh","alpha3":"khm"},
    {"id":33,"name":"Cameroun","alpha2":"cm","alpha3":"cmr"},
    {"id":34,"name":"Canada","alpha2":"ca","alpha3":"can"},
    {"id":35,"name":"Cap-Vert","alpha2":"cv","alpha3":"cpv"},
    {"id":36,"name":"République centrafricaine","alpha2":"cf","alpha3":"caf"},
    {"id":37,"name":"Chili","alpha2":"cl","alpha3":"chl"},
    {"id":38,"name":"Chine","alpha2":"cn","alpha3":"chn"},
    {"id":39,"name":"Chypre (pays)","alpha2":"cy","alpha3":"cyp"},
    {"id":40,"name":"Colombie","alpha2":"co","alpha3":"col"},
    {"id":41,"name":"Comores (pays)","alpha2":"km","alpha3":"com"},
    {"id":42,"name":"République du Congo","alpha2":"cg","alpha3":"cog"},
    {"id":43,"name":"République démocratique du Congo","alpha2":"cd","alpha3":"cod"},
    {"id":44,"name":"Corée du Sud","alpha2":"kr","alpha3":"kor"},
    {"id":45,"name":"Corée du Nord","alpha2":"kp","alpha3":"prk"},
    {"id":46,"name":"Costa Rica","alpha2":"cr","alpha3":"cri"},
    {"id":47,"name":"Côte d'Ivoire","alpha2":"ci","alpha3":"civ"},
    {"id":48,"name":"Croatie","alpha2":"hr","alpha3":"hrv"},
    {"id":49,"name":"Cuba","alpha2":"cu","alpha3":"cub"},
    {"id":50,"name":"Danemark","alpha2":"dk","alpha3":"dnk"},
    {"id":51,"name":"Djibouti","alpha2":"dj","alpha3":"dji"},
    {"id":52,"name":"République dominicaine","alpha2":"do","alpha3":"dom"},
    {"id":53,"name":"Dominique","alpha2":"dm","alpha3":"dma"},
    {"id":54,"name":"Égypte","alpha2":"eg","alpha3":"egy"},
    {"id":55,"name":"Salvador","alpha2":"sv","alpha3":"slv"},
    {"id":56,"name":"Émirats arabes unis","alpha2":"ae","alpha3":"are"},
    {"id":57,"name":"Équateur (pays)","alpha2":"ec","alpha3":"ecu"},
    {"id":58,"name":"Érythrée","alpha2":"er","alpha3":"eri"},
    {"id":59,"name":"Espagne","alpha2":"es","alpha3":"esp"},
    {"id":60,"name":"Estonie","alpha2":"ee","alpha3":"est"},
    {"id":61,"name":"États-Unis","alpha2":"us","alpha3":"usa"},
    {"id":62,"name":"Éthiopie","alpha2":"et","alpha3":"eth"},
    {"id":63,"name":"Fidji","alpha2":"fj","alpha3":"fji"},
    {"id":64,"name":"Finlande","alpha2":"fi","alpha3":"fin"},
    {"id":65,"name":"France","alpha2":"fr","alpha3":"fra"},
    {"id":66,"name":"Gabon","alpha2":"ga","alpha3":"gab"},
    {"id":67,"name":"Gambie","alpha2":"gm","alpha3":"gmb"},
    {"id":68,"name":"Géorgie (pays)","alpha2":"ge","alpha3":"geo"},
    {"id":69,"name":"Ghana","alpha2":"gh","alpha3":"gha"},
    {"id":70,"name":"Grèce","alpha2":"gr","alpha3":"grc"},
    {"id":71,"name":"Grenade (pays)","alpha2":"gd","alpha3":"grd"},
    {"id":72,"name":"Guatemala","alpha2":"gt","alpha3":"gtm"},
    {"id":73,"name":"Guinée","alpha2":"gn","alpha3":"gin"},
    {"id":74,"name":"Guinée-Bissau","alpha2":"gw","alpha3":"gnb"},
    {"id":75,"name":"Guinée équatoriale","alpha2":"gq","alpha3":"gnq"},
    {"id":76,"name":"Guyana","alpha2":"gy","alpha3":"guy"},
    {"id":77,"name":"Haïti","alpha2":"ht","alpha3":"hti"},
    {"id":78,"name":"Honduras","alpha2":"hn","alpha3":"hnd"},
    {"id":79,"name":"Hongrie","alpha2":"hu","alpha3":"hun"},
    {"id":80,"name":"Inde","alpha2":"in","alpha3":"ind"},
    {"id":81,"name":"Indonésie","alpha2":"id","alpha3":"idn"},
    {"id":82,"name":"Iran","alpha2":"ir","alpha3":"irn"},
    {"id":83,"name":"Irak","alpha2":"iq","alpha3":"irq"},
    {"id":84,"name":"Irlande (pays)","alpha2":"ie","alpha3":"irl"},
    {"id":85,"name":"Islande","alpha2":"is","alpha3":"isl"},
    {"id":86,"name":"Israël","alpha2":"il","alpha3":"isr"},
    {"id":87,"name":"Italie","alpha2":"it","alpha3":"ita"},
    {"id":88,"name":"Jamaïque","alpha2":"jm","alpha3":"jam"},
    {"id":89,"name":"Japon","alpha2":"jp","alpha3":"jpn"},
    {"id":90,"name":"Jordanie","alpha2":"jo","alpha3":"jor"},
    {"id":91,"name":"Kazakhstan","alpha2":"kz","alpha3":"kaz"},
    {"id":92,"name":"Kenya","alpha2":"ke","alpha3":"ken"},
    {"id":93,"name":"Kirghizistan","alpha2":"kg","alpha3":"kgz"},
    {"id":94,"name":"Kiribati","alpha2":"ki","alpha3":"kir"},
    {"id":95,"name":"Koweït","alpha2":"kw","alpha3":"kwt"},
    {"id":96,"name":"Laos","alpha2":"la","alpha3":"lao"},
    {"id":97,"name":"Lesotho","alpha2":"ls","alpha3":"lso"},
    {"id":98,"name":"Lettonie","alpha2":"lv","alpha3":"lva"},
    {"id":99,"name":"Liban","alpha2":"lb","alpha3":"lbn"},
    {"id":100,"name":"Liberia","alpha2":"lr","alpha3":"lbr"},
    {"id":101,"name":"Libye","alpha2":"ly","alpha3":"lby"},
    {"id":102,"name":"Liechtenstein","alpha2":"li","alpha3":"lie"},
    {"id":103,"name":"Lituanie","alpha2":"lt","alpha3":"ltu"},
    {"id":104,"name":"Luxembourg (pays)","alpha2":"lu","alpha3":"lux"},
    {"id":104,"name":"Macédoine du Nord","alpha2":"mk","alpha3":"mkd"},
    {"id":106,"name":"Madagascar","alpha2":"mg","alpha3":"mdg"},
    {"id":107,"name":"Malaisie","alpha2":"my","alpha3":"mys"},
    {"id":108,"name":"Malawi","alpha2":"mw","alpha3":"mwi"},
    {"id":109,"name":"Maldives","alpha2":"mv","alpha3":"mdv"},
    {"id":110,"name":"Mali","alpha2":"ml","alpha3":"mli"},
    {"id":111,"name":"Malte","alpha2":"mt","alpha3":"mlt"},
    {"id":112,"name":"Maroc","alpha2":"ma","alpha3":"mar"},
    {"id":113,"name":"Îles Marshall (pays)","alpha2":"mh","alpha3":"mhl"},
    {"id":114,"name":"Maurice (pays)","alpha2":"mu","alpha3":"mus"},
    {"id":115,"name":"Mauritanie","alpha2":"mr","alpha3":"mrt"},
    {"id":116,"name":"Mexique","alpha2":"mx","alpha3":"mex"},
    {"id":117,"name":"États fédérés de Micronésie (pays)","alpha2":"fm","alpha3":"fsm"},
    {"id":118,"name":"Moldavie","alpha2":"md","alpha3":"mda"},
    {"id":119,"name":"Monaco","alpha2":"mc","alpha3":"mco"},
    {"id":120,"name":"Mongolie","alpha2":"mn","alpha3":"mng"},
    {"id":121,"name":"Monténégro","alpha2":"me","alpha3":"mne"},
    {"id":122,"name":"Mozambique","alpha2":"mz","alpha3":"moz"},
    {"id":123,"name":"Birmanie","alpha2":"mm","alpha3":"mmr"},
    {"id":124,"name":"Namibie","alpha2":"na","alpha3":"nam"},
    {"id":125,"name":"Nauru","alpha2":"nr","alpha3":"nru"},
    {"id":126,"name":"Népal","alpha2":"np","alpha3":"npl"},
    {"id":127,"name":"Nicaragua","alpha2":"ni","alpha3":"nic"},
    {"id":128,"name":"Niger","alpha2":"ne","alpha3":"ner"},
    {"id":129,"name":"Nigeria","alpha2":"ng","alpha3":"nga"},
    {"id":130,"name":"Norvège","alpha2":"no","alpha3":"nor"},
    {"id":131,"name":"Nouvelle-Zélande","alpha2":"nz","alpha3":"nzl"},
    {"id":132,"name":"Oman","alpha2":"om","alpha3":"omn"},
    {"id":133,"name":"Ouganda","alpha2":"ug","alpha3":"uga"},
    {"id":134,"name":"Ouzbékistan","alpha2":"uz","alpha3":"uzb"},
    {"id":135,"name":"Pakistan","alpha2":"pk","alpha3":"pak"},
    {"id":136,"name":"Palaos","alpha2":"pw","alpha3":"plw"},
    {"id":137,"name":"Panama","alpha2":"pa","alpha3":"pan"},
    {"id":138,"name":"Papouasie-Nouvelle-Guinée","alpha2":"pg","alpha3":"png"},
    {"id":139,"name":"Paraguay","alpha2":"py","alpha3":"pry"},
    {"id":140,"name":"Pays-Bas","alpha2":"nl","alpha3":"nld"},
    {"id":141,"name":"Pérou","alpha2":"pe","alpha3":"per"},
    {"id":142,"name":"Philippines","alpha2":"ph","alpha3":"phl"},
    {"id":143,"name":"Pologne","alpha2":"pl","alpha3":"pol"},
    {"id":144,"name":"Portugal","alpha2":"pt","alpha3":"prt"},
    {"id":145,"name":"Qatar","alpha2":"qa","alpha3":"qat"},
    {"id":146,"name":"Roumanie","alpha2":"ro","alpha3":"rou"},
    {"id":147,"name":"Royaume-Uni","alpha2":"gb","alpha3":"gbr"},
    {"id":148,"name":"Russie","alpha2":"ru","alpha3":"rus"},
    {"id":149,"name":"Rwanda","alpha2":"rw","alpha3":"rwa"},
    {"id":150,"name":"Saint-Christophe-et-Niévès","alpha2":"kn","alpha3":"kna"},
    {"id":151,"name":"Saint-Marin","alpha2":"sm","alpha3":"smr"},
    {"id":152,"name":"Saint-Vincent-et-les-Grenadines","alpha2":"vc","alpha3":"vct"},
    {"id":153,"name":"Sainte-Lucie","alpha2":"lc","alpha3":"lca"},
    {"id":154,"name":"Salomon","alpha2":"sb","alpha3":"slb"},
    {"id":155,"name":"Samoa","alpha2":"ws","alpha3":"wsm"},
    {"id":156,"name":"Sao Tomé-et-Principe","alpha2":"st","alpha3":"stp"},
    {"id":157,"name":"Sénégal","alpha2":"sn","alpha3":"sen"},
    {"id":158,"name":"Serbie","alpha2":"rs","alpha3":"srb"},
    {"id":159,"name":"Seychelles","alpha2":"sc","alpha3":"syc"},
    {"id":160,"name":"Sierra Leone","alpha2":"sl","alpha3":"sle"},
    {"id":161,"name":"Singapour","alpha2":"sg","alpha3":"sgp"},
    {"id":162,"name":"Slovaquie","alpha2":"sk","alpha3":"svk"},
    {"id":163,"name":"Slovénie","alpha2":"si","alpha3":"svn"},
    {"id":164,"name":"Somalie","alpha2":"so","alpha3":"som"},
    {"id":165,"name":"Soudan","alpha2":"sd","alpha3":"sdn"},
    {"id":166,"name":"Soudan du Sud","alpha2":"ss","alpha3":"ssd"},
    {"id":167,"name":"Sri Lanka","alpha2":"lk","alpha3":"lka"},
    {"id":168,"name":"Suède","alpha2":"se","alpha3":"swe"},
    {"id":169,"name":"Suisse","alpha2":"ch","alpha3":"che"},
    {"id":170,"name":"Suriname","alpha2":"sr","alpha3":"sur"},
    {"id":171,"name":"Swaziland","alpha2":"sz","alpha3":"swz"},
    {"id":172,"name":"Syrie","alpha2":"sy","alpha3":"syr"},
    {"id":173,"name":"Tadjikistan","alpha2":"tj","alpha3":"tjk"},
    {"id":174,"name":"Tanzanie","alpha2":"tz","alpha3":"tza"},
    {"id":175,"name":"Tchad","alpha2":"td","alpha3":"tcd"},
    {"id":176,"name":"Tchéquie","alpha2":"cz","alpha3":"cze"},
    {"id":177,"name":"Thaïlande","alpha2":"th","alpha3":"tha"},
    {"id":178,"name":"Timor oriental","alpha2":"tl","alpha3":"tls"},
    {"id":179,"name":"Togo","alpha2":"tg","alpha3":"tgo"},
    {"id":180,"name":"Tonga","alpha2":"to","alpha3":"ton"},
    {"id":181,"name":"Trinité-et-Tobago","alpha2":"tt","alpha3":"tto"},
    {"id":182,"name":"Tunisie","alpha2":"tn","alpha3":"tun"},
    {"id":183,"name":"Turkménistan","alpha2":"tm","alpha3":"tkm"},
    {"id":184,"name":"Turquie","alpha2":"tr","alpha3":"tur"},
    {"id":185,"name":"Tuvalu","alpha2":"tv","alpha3":"tuv"},
    {"id":186,"name":"Ukraine","alpha2":"ua","alpha3":"ukr"},
    {"id":187,"name":"Uruguay","alpha2":"uy","alpha3":"ury"},
    {"id":188,"name":"Vanuatu","alpha2":"vu","alpha3":"vut"},
    {"id":189,"name":"Venezuela","alpha2":"ve","alpha3":"ven"},
    {"id":190,"name":"Viêt Nam","alpha2":"vn","alpha3":"vnm"},
    {"id":191,"name":"Yémen","alpha2":"ye","alpha3":"yem"},
    {"id":192,"name":"Zambie","alpha2":"zm","alpha3":"zmb"},
    {"id":193,"name":"Zimbabwe","alpha2":"zw","alpha3":"zwe"}
    ]

/**
* affichage des datas de l'utilisateur (pour test)
*/
/*this.user = this.loginService.getUserData()
.subscribe(data => {
this.user = data.user;
console.log(data.user.id);
});*/

}

onSubmit() {

  console.log(this.tripForm.value);
  this.tripService.addTrip(this.tripForm.value, this.selectedPays, this.id).subscribe(

    // traitement de la réponse HTTP, en cas d'erreur on affiche
    // l'erreur dans la vue
      trip => {
        console.log(trip);
        this.loading = false;

         // redirection
       // this.router.navigate(['']);
      },
      error => {
        this.error = error;
        console.log(error);

        this.loading = false;
      }
    );



}

}
