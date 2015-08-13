var postState = '';
var postCountry = '';

// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.

var state = '\
US:AK:Alaska|\
US:AL:Alabama|\
US:AR:Arkansas|\
US:AS:American Samoa|\
US:AZ:Arizona|\
US:CA:California|\
US:CO:Colorado|\
US:CT:Connecticut|\
US:DC:D.C.|\
US:DE:Delaware|\
US:FL:Florida|\
US:FM:Micronesia|\
US:GA:Georgia|\
US:GU:Guam|\
US:HI:Hawaii|\
US:IA:Iowa|\
US:ID:Idaho|\
US:IL:Illinois|\
US:IN:Indiana|\
US:KS:Kansas|\
US:KY:Kentucky|\
US:LA:Louisiana|\
US:MA:Massachusetts|\
US:MD:Maryland|\
US:ME:Maine|\
US:MH:Marshall Islands|\
US:MI:Michigan|\
US:MN:Minnesota|\
US:MO:Missouri|\
US:MP:Marianas|\
US:MS:Mississippi|\
US:MT:Montana|\
US:NC:North Carolina|\
US:ND:North Dakota|\
US:NE:Nebraska|\
US:NH:New Hampshire|\
US:NJ:New Jersey|\
US:NM:New Mexico|\
US:NV:Nevada|\
US:NY:New York|\
US:OH:Ohio|\
US:OK:Oklahoma|\
US:OR:Oregon|\
US:PA:Pennsylvania|\
US:PR:Puerto Rico|\
US:PW:Palau|\
US:RI:Rhode Island|\
US:SC:South Carolina|\
US:SD:South Dakota|\
US:TN:Tennessee|\
US:TX:Texas|\
US:UT:Utah|\
US:VA:Virginia|\
US:VI:Virgin Islands|\
US:VT:Vermont|\
US:WA:Washington|\
US:WI:Wisconsin|\
US:WV:West Virginia|\
US:WY:Wyoming|\
US:AA:Military Americas|\
US:AE:Military Europe/ME/Canada|\
US:AP:Military Pacific|\
CA:AB:Alberta|\
CA:MB:Manitoba|\
CA:AB:Alberta|\
CA:BC:British Columbia|\
CA:MB:Manitoba|\
CA:NB:New Brunswick|\
CA:NL:Newfoundland and Labrador|\
CA:NS:Nova Scotia|\
CA:NT:Northwest Territories|\
CA:NU:Nunavut|\
CA:ON:Ontario|\
CA:PE:Prince Edward Island|\
CA:QC:Quebec|\
CA:SK:Saskatchewan|\
CA:YT:Yukon Territory|\
AU:AAT:Australian Antarctic Territory|\
AU:ACT:Australian Capital Territory|\
AU:NT:Northern Territory|\
AU:NSW:New South Wales|\
AU:QLD:Queensland|\
AU:SA:South Australia|\
AU:TAS:Tasmania|\
AU:VIC:Victoria|\
AU:WA:Western Australia|\
BR:AC:Acre|\
BR:AL:Alagoas|\
BR:AM:Amazonas|\
BR:AP:Amapa|\
BR:BA:Baia|\
BR:CE:Ceara|\
BR:DF:Distrito Federal|\
BR:ES:Espirito Santo|\
BR:FN:Fernando de Noronha|\
BR:GO:Goias|\
BR:MA:Maranhao|\
BR:MG:Minas Gerais|\
BR:MS:Mato Grosso do Sul|\
BR:MT:Mato Grosso|\
BR:PA:Para|\
BR:PB:Paraiba|\
BR:PE:Pernambuco|\
BR:PI:Piaui|\
BR:PR:Parana|\
BR:RJ:Rio de Janeiro|\
BR:RN:Rio Grande do Norte|\
BR:RO:Rondonia|\
BR:RR:Roraima|\
BR:RS:Rio Grande do Sul|\
BR:SC:Santa Catarina|\
BR:SE:Sergipe|\
BR:SP:Sao Paulo|\
BR:TO:Tocatins|\
NL:DR:Drente|\
NL:FL:Flevoland|\
NL:FR:Friesland|\
NL:GL:Gelderland|\
NL:GR:Groningen|\
NL:LB:Limburg|\
NL:NB:Noord Brabant|\
NL:NH:Noord Holland|\
NL:OV:Overijssel|\
NL:UT:Utrecht|\
NL:ZH:Zuid Holland|\
NL:ZL:Zeeland|\
UK:AVON:Avon|\
UK:BEDS:Bedfordshire|\
UK:BERKS:Berkshire|\
UK:BUCKS:Buckinghamshire|\
UK:CAMBS:Cambridgeshire|\
UK:CHESH:Cheshire|\
UK:CLEVE:Cleveland|\
UK:CORN:Cornwall|\
UK:CUMB:Cumbria|\
UK:DERBY:Derbyshire|\
UK:DEVON:Devon|\
UK:DORSET:Dorset|\
UK:DURHAM:Durham|\
UK:ESSEX:Essex|\
UK:GLOUS:Gloucestershire|\
UK:GLONDON:Greater London|\
UK:GMANCH:Greater Manchester|\
UK:HANTS:Hampshire|\
UK:HERWOR:Hereford & Worcestershire|\
UK:HERTS:Hertfordshire|\
UK:HUMBER:Humberside|\
UK:IOM:Isle of Man|\
UK:IOW:Isle of Wight|\
UK:KENT:Kent|\
UK:LANCS:Lancashire|\
UK:LEICS:Leicestershire|\
UK:LINCS:Lincolnshire|\
UK:MERSEY:Merseyside|\
UK:NORF:Norfolk|\
UK:NHANTS:Northamptonshire|\
UK:NTHUMB:Northumberland|\
UK:NOTTS:Nottinghamshire|\
UK:OXON:Oxfordshire|\
UK:SHROPS:Shropshire|\
UK:SOM:Somerset|\
UK:STAFFS:Staffordshire|\
UK:SUFF:Suffolk|\
UK:SURREY:Surrey|\
UK:SUSS:Sussex|\
UK:WARKS:Warwickshire|\
UK:WMID:West Midlands|\
UK:WILTS:Wiltshire|\
UK:YORK:Yorkshire|\
EI:CO ANTRIM:County Antrim|\
EI:CO ARMAGH:County Armagh|\
EI:CO DOWN:County Down|\
EI:CO FERMANAGH:County Fermanagh|\
EI:CO DERRY:County Londonderry|\
EI:CO TYRONE:County Tyrone|\
EI:CO CAVAN:County Cavan|\
EI:CO DONEGAL:County Donegal|\
EI:CO MONAGHAN:County Monaghan|\
EI:CO DUBLIN:County Dublin|\
EI:CO CARLOW:County Carlow|\
EI:CO KILDARE:County Kildare|\
EI:CO KILKENNY:County Kilkenny|\
EI:CO LAOIS:County Laois|\
EI:CO LONGFORD:County Longford|\
EI:CO LOUTH:County Louth|\
EI:CO MEATH:County Meath|\
EI:CO OFFALY:County Offaly|\
EI:CO WESTMEATH:County Westmeath|\
EI:CO WEXFORD:County Wexford|\
EI:CO WICKLOW:County Wicklow|\
EI:CO GALWAY:County Galway|\
EI:CO MAYO:County Mayo|\
EI:CO LEITRIM:County Leitrim|\
EI:CO ROSCOMMON:County Roscommon|\
EI:CO SLIGO:County Sligo|\
EI:CO CLARE:County Clare|\
EI:CO CORK:County Cork|\
EI:CO KERRY:County Kerry|\
EI:CO LIMERICK:County Limerick|\
EI:CO TIPPERARY:County Tipperary|\
EI:CO WATERFORD:County Waterford|\
BG:Blagoevgrad:Blagoevgrad|\
BG:Burgas:Burgas|\
BG:Dobrich:Dobrich|\
BG:Gabrovo:Gabrovo|\
BG:Khaskovo:Khaskovo|\
BG:Kurdzhali:Kurdzhali|\
BG:Kyustendil:Kyustendil|\
BG:Lovech:Lovech|\
BG:Montana:Montana|\
BG:Pazardzhik:Pazardzhik|\
BG:Pernik:Pernik|\
BG:Pleven:Pleven|\
BG:Plovdiv:Plovdiv|\
BG:Razgrad:Razgrad|\
BG:Ruse:Ruse|\
BG:Shumen:Shumen|\
BG:Silistra:Silistra|\
BG:Sliven:Sliven|\
BG:Smolyan:Smolyan|\
BG:Sofiya:Sofiya|\
BG:Sofiya-Grad:Sofiya-Grad|\
BG:Stara Zagora:Stara Zagora|\
BG:Turgovishte:Turgovishte|\
BG:Varna:Varna|\
BG:Veliko Turnovo:Veliko Turnovo|\
BG:Vidin:Vidin|\
BG:Vratsa:Vratsa|\
BG:Yambol:Yambol|\
BE:Antwerpen:Antwerpen|\
BE:Brabant Wallon:Brabant Wallon|\
BE:Brussels Capitol Region:Brussels Capitol Region|\
BE:Hainaut:Hainaut|\
BE:Liege:Liege|\
BE:Limburg:Limburg|\
BE:Luxembourg:Luxembourg|\
BE:Namur:Namur|\
BE:Oost-Vlaanderen:Oost-Vlaanderen|\
BE:Vlaams Brabant:Vlaams Brabant|\
BE:West-Vlaanderen:West-Vlaanderen|\
AT:Wien:Wien|\
AT:Niederosterreich:Niederosterreich|\
AT:Oberosterreich:Oberosterreich|\
AT:Steiermark:Steiermark|\
AT:Karnten:Karnten|\
AT:Tirol:Tirol|\
AT:Salzburg:Salzburg|\
AT:Vorarlberg:Vorarlberg|\
AT:Burgenland:Burgenland|\
HR:Bjelovarsko-Bilogorska Zupanija:Bjelovarsko-Bilogorska Zupanija|\
HR:Brodsko-Posavska Zupanija:Brodsko-Posavska Zupanija|\
HR:Dubrovacko-Neretvanska Zupanija:Dubrovacko-Neretvanska Zupanija|\
HR:Istarska Zupanija:Istarska Zupanija|\
HR:Karlovacka Zupanija:Karlovacka Zupanija|\
HR:Koprivnicko-Krizevacka Zupanija:Koprivnicko-Krizevacka Zupanija|\
HR:Krapinsko-Zagorska Zupanija:Krapinsko-Zagorska Zupanija|\
HR:Licko-Senjska Zupanija:Licko-Senjska Zupanija|\
HR:Medimurska Zupanija:Medimurska Zupanija|\
HR:Osjecko-Baranjska Zupanija:Osjecko-Baranjska Zupanija|\
HR:Pozesko-Slavonska Zupanija:Pozesko-Slavonska Zupanija|\
HR:Primorsko-Goranska Zupanija:Primorsko-Goranska Zupanija|\
HR:Sibensko-Kninska Zupanija:Sibensko-Kninska Zupanija|\
HR:Sisacko-Moslavacka Zupanija:Sisacko-Moslavacka Zupanija|\
HR:Splitsko-Dalmatinska Zupanija:Splitsko-Dalmatinska Zupanija|\
HR:Varazdinska Zupanija:Varazdinska Zupanija|\
HR:Viroviticko-Podravska Zupanija:Viroviticko-Podravska Zupanija|\
HR:Vukovarsko-Srijemska Zupanija:Vukovarsko-Srijemska Zupanija|\
HR:Zadarska Zupanija:Zadarska Zupanija|\
HR:Zagreb:Zagreb|\
HR:Zagrebacka Zupanija:Zagrebacka Zupanija|\
CY:Famagusta:Famagusta|\
CY:Kyrenia:Kyrenia|\
CY:Larnaca:Larnaca|\
CY:Limassol:Limassol|\
CY:Nicosia:Nicosia|\
CY:Paphos:Paphos|\
CZ:Brnensky:Brnensky|\
CZ:Budejovicky:Budejovicky|\
CZ:Jihlavsky:Jihlavsky|\
CZ:Karlovarsky:Karlovarsky|\
CZ:Kralovehradecky:Kralovehradecky|\
CZ:Liberecky:Liberecky|\
CZ:Olomoucky:Olomoucky|\
CZ:Ostravsky:Ostravsky|\
CZ:Pardubicky:Pardubicky|\
CZ:Plzensky:Plzensky|\
CZ:Praha:Praha|\
CZ:Stredocesky:Stredocesky|\
CZ:Ustecky:Ustecky|\
CZ:Zlinsky:Zlinsky|\
DK:Arhus:Arhus|\
DK:Bornholm:Bornholm|\
DK:Fredericksberg:Fredericksberg|\
DK:Frederiksborg:Frederiksborg|\
DK:Fyn:Fyn|\
DK:Kobenhavn:Kobenhavn|\
DK:Kobenhavns:Kobenhavns|\
DK:Nordjylland:Nordjylland|\
DK:Ribe:Ribe|\
DK:Ringkobing:Ringkobing|\
DK:Roskilde:Roskilde|\
DK:Sonderjylland:Sonderjylland|\
DK:Storstrom:Storstrom|\
DK:Vejle:Vejle|\
DK:Vestsjalland:Vestsjalland|\
DK:Viborg:Viborg|\
EE:Harjumaa (Tallinn):Harjumaa (Tallinn)|\
EE:Hiiumaa (Kardla):Hiiumaa (Kardla)|\
EE:Ida-Virumaa (Johvi):Ida-Virumaa (Johvi)|\
EE:Jarvamaa (Paide):Jarvamaa (Paide)|\
EE:Jogevamaa (Jogeva):Jogevamaa (Jogeva)|\
EE:Laane-Virumaa (Rakvere):Laane-Virumaa (Rakvere)|\
EE:Laanemaa (Haapsalu):Laanemaa (Haapsalu)|\
EE:Parnumaa (Parnu):Parnumaa (Parnu)|\
EE:Polvamaa (Polva):Polvamaa (Polva)|\
EE:Raplamaa (Rapla):Raplamaa (Rapla)|\
EE:Saaremaa (Kuessaare):Saaremaa (Kuessaare)|\
EE:Tartumaa (Tartu):Tartumaa (Tartu)|\
EE:Valgamaa (Valga):Valgamaa (Valga)|\
EE:Viljandimaa (Viljandi):Viljandimaa (Viljandi)|\
EE:Vorumaa (Voru):Vorumaa (Voru)|\
FI:Aland:Aland|\
FI:Etela-Suomen Laani:Etela-Suomen Laani|\
FI:Ita-Suomen Laani:Ita-Suomen Laani|\
FI:Lansi-Suomen Laani:Lansi-Suomen Laani|\
FI:Lappi:Lappi|\
FI:Oulun Laani:Oulun Laani|\
FR:Alsace:Alsace|\
FR:Aquitaine:Aquitaine|\
FR:Auvergne:Auvergne|\
FR:Basse-Normandie:Basse-Normandie|\
FR:Bourgogne:Bourgogne|\
FR:Bretagne:Bretagne|\
FR:Centre:Centre|\
FR:Champagne-Ardenne:Champagne-Ardenne|\
FR:Corse:Corse|\
FR:Franche-Comte:Franche-Comte|\
FR:Haute-Normandie:Haute-Normandie|\
FR:Ile-de-France:Ile-de-France|\
FR:Languedoc-Roussillon:Languedoc-Roussillon|\
FR:Limousin:Limousin|\
FR:Lorraine:Lorraine|\
FR:Midi-Pyrenees:Midi-Pyrenees|\
FR:Nord-Pas-de-Calais:Nord-Pas-de-Calais|\
FR:Pays de la Loire:Pays de la Loire|\
FR:Picardie:Picardie|\
FR:Poitou-Charentes:Poitou-Charentes|\
FR:Provence-Alpes-Cote d-Azur:Provence-Alpes-Cote d-Azur|\
FR:Rhone-Alpes:Rhone-Alpes|\
HU:Bacs-Kiskun:Bacs-Kiskun|\
HU:Baranya:Baranya|\
HU:Bekes:Bekes|\
HU:Bekescsaba:Bekescsaba|\
HU:Borsod-Abauj-Zemplen:Borsod-Abauj-Zemplen|\
HU:Budapest:Budapest|\
HU:Csongrad:Csongrad|\
HU:Debrecen:Debrecen|\
HU:Dunaujvaros:Dunaujvaros|\
HU:Eger:Eger|\
HU:Fejer:Fejer|\
HU:Gyor:Gyor|\
HU:Gyor-Moson-Sopron:Gyor-Moson-Sopron|\
HU:Hajdu-Bihar:Hajdu-Bihar|\
HU:Heves:Heves|\
HU:Hodmezovasarhely:Hodmezovasarhely|\
HU:Jasz-Nagykun-Szolnok:Jasz-Nagykun-Szolnok|\
HU:Kaposvar:Kaposvar|\
HU:Kecskemet:Kecskemet|\
HU:Komarom-Esztergom:Komarom-Esztergom|\
HU:Miskolc:Miskolc|\
HU:Nagykanizsa:Nagykanizsa|\
HU:Nograd:Nograd|\
HU:Nyiregyhaza:Nyiregyhaza|\
HU:Pecs:Pecs|\
HU:Pest:Pest|\
HU:Somogy:Somogy|\
HU:Sopron:Sopron|\
HU:Szabolcs-Szatmar-Bereg:Szabolcs-Szatmar-Bereg|\
HU:Szeged:Szeged|\
HU:Szekesfehervar:Szekesfehervar|\
HU:Szolnok:Szolnok|\
HU:Szombathely:Szombathely|\
HU:Tatabanya:Tatabanya|\
HU:Tolna:Tolna|\
HU:Vas:Vas|\
HU:Veszprem:Veszprem|\
HU:Veszprem:Veszprem|\
HU:Zala:Zala|\
HU:Zalaegerszeg:Zalaegerszeg|\
IE:Carlow:Carlow|\
IE:Cavan:Cavan|\
IE:Clare:Clare|\
IE:Cork:Cork|\
IE:Donegal:Donegal|\
IE:Dublin:Dublin|\
IE:Galway:Galway|\
IE:Kerry:Kerry|\
IE:Kildare:Kildare|\
IE:Kilkenny:Kilkenny|\
IE:Laois:Laois|\
IE:Leitrim:Leitrim|\
IE:Limerick:Limerick|\
IE:Longford:Longford|\
IE:Louth:Louth|\
IE:Mayo:Mayo|\
IE:Meath:Meath|\
IE:Monaghan:Monaghan|\
IE:Offaly:Offaly|\
IE:Roscommon:Roscommon|\
IE:Sligo:Sligo|\
IE:Tipperary:Tipperary|\
IE:Waterford:Waterford|\
IE:Westmeath:Westmeath|\
IE:Wexford:Wexford|\
IE:Wicklow:Wicklow|\
IT:Abruzzo:Abruzzo|\
IT:Basilicata:Basilicata|\
IT:Calabria:Calabria|\
IT:Campania:Campania|\
IT:Emilia-Romagna:Emilia-Romagna|\
IT:Friuli-Venezia Giulia:Friuli-Venezia Giulia|\
IT:Lazio:Lazio|\
IT:Liguria:Liguria|\
IT:Lombardia:Lombardia|\
IT:Marche:Marche|\
IT:Molise:Molise|\
IT:Piemonte:Piemonte|\
IT:Puglia:Puglia|\
IT:Sardegna:Sardegna|\
IT:Sicilia:Sicilia|\
IT:Toscana:Toscana|\
IT:Trentino-Alto Adige:Trentino-Alto Adige|\
IT:Umbria:Umbria|\
IT:Valle d-Aosta:Valle d-Aosta|\
IT:Veneto:Veneto|\
LT:Akmenes Rajonas:Akmenes Rajonas|\
LT:Alytaus Rajonas:Alytaus Rajonas|\
LT:Alytus:Alytus|\
LT:Anyksciu Rajonas:Anyksciu Rajonas|\
LT:Birstonas:Birstonas|\
LT:Birzu Rajonas:Birzu Rajonas|\
LT:Druskininkai:Druskininkai|\
LT:Ignalinos Rajonas:Ignalinos Rajonas|\
LT:Jonavos Rajonas:Jonavos Rajonas|\
LT:Joniskio Rajonas:Joniskio Rajonas|\
LT:Jurbarko Rajonas:Jurbarko Rajonas|\
LT:Kaisiadoriu Rajonas:Kaisiadoriu Rajonas|\
LT:Kaunas:Kaunas|\
LT:Kauno Rajonas:Kauno Rajonas|\
LT:Kedainiu Rajonas:Kedainiu Rajonas|\
LT:Kelmes Rajonas:Kelmes Rajonas|\
LT:Klaipeda:Klaipeda|\
LT:Klaipedos Rajonas:Klaipedos Rajonas|\
LT:Kretingos Rajonas:Kretingos Rajonas|\
LT:Kupiskio Rajonas:Kupiskio Rajonas|\
LT:Lazdiju Rajonas:Lazdiju Rajonas|\
LT:Marijampole:Marijampole|\
LT:Marijampoles Rajonas:Marijampoles Rajonas|\
LT:Mazeikiu Rajonas:Mazeikiu Rajonas|\
LT:Moletu Rajonas:Moletu Rajonas|\
LT:Neringa Pakruojo Rajonas:Neringa Pakruojo Rajonas|\
LT:Palanga:Palanga|\
LT:Panevezio Rajonas:Panevezio Rajonas|\
LT:Panevezys:Panevezys|\
LT:Pasvalio Rajonas:Pasvalio Rajonas|\
LT:Plunges Rajonas:Plunges Rajonas|\
LT:Prienu Rajonas:Prienu Rajonas|\
LT:Radviliskio Rajonas:Radviliskio Rajonas|\
LT:Raseiniu Rajonas:Raseiniu Rajonas|\
LT:Rokiskio Rajonas:Rokiskio Rajonas|\
LT:Sakiu Rajonas:Sakiu Rajonas|\
LT:Salcininku Rajonas:Salcininku Rajonas|\
LT:Siauliai:Siauliai|\
LT:Siauliu Rajonas:Siauliu Rajonas|\
LT:Silales Rajonas:Silales Rajonas|\
LT:Silutes Rajonas:Silutes Rajonas|\
LT:Sirvintu Rajonas:Sirvintu Rajonas|\
LT:Skuodo Rajonas:Skuodo Rajonas|\
LT:Svencioniu Rajonas:Svencioniu Rajonas|\
LT:Taurages Rajonas:Taurages Rajonas|\
LT:Telsiu Rajonas:Telsiu Rajonas|\
LT:Traku Rajonas:Traku Rajonas|\
LT:Ukmerges Rajonas:Ukmerges Rajonas|\
LT:Utenos Rajonas:Utenos Rajonas|\
LT:Varenos Rajonas:Varenos Rajonas|\
LT:Vilkaviskio Rajonas:Vilkaviskio Rajonas|\
LT:Vilniaus Rajonas:Vilniaus Rajonas|\
LT:Vilnius:Vilnius|\
LT:Zarasu Rajonas:Zarasu Rajonas|\
LU:Diekirch:Diekirch|\
LU:Grevenmacher:Grevenmacher|\
LU:Luxembourg:Luxembourg|\
MT:Valletta:Valletta|\
NZ:Akaroa:Akaroa|\
NZ:Amuri:Amuri|\
NZ:Ashburton:Ashburton|\
NZ:Bay of Islands:Bay of Islands|\
NZ:Bruce:Bruce|\
NZ:Buller:Buller|\
NZ:Chatham heviot:Chatham heviot|\
NZ:Clifton:Clifton|\
NZ:Clutha:Clutha|\
NZ:Cook:Cook|\
NZ:Dannevirke:Dannevirke|\
NZ:Egmont:Egmont|\
NZ:Eketahuna:Eketahuna|\
NZ:Ellesmere:Ellesmere|\
NZ:Eltham:Eltham|\
NZ:Eyre:Eyre|\
NZ:Featherston:Featherston|\
NZ:Franklin:Franklin|\
NZ:Golden Bay:Golden Bay|\
NZ:Great Barrier Island:Great Barrier Island|\
NZ:Grey:Grey|\
NZ:Hauraki wera:Hauraki wera|\
NZ:Hawkes Bay:Hawkes Bay|\
NZ:Heathcote:Heathcote|\
NZ:Hikurangi:Hikurangi|\
NZ:Hobson:Hobson|\
NZ:Hokianga:Hokianga|\
NZ:Horowhenua:Horowhenua|\
NZ:Hurunui:Hurunui|\
NZ:Hutt:Hutt|\
NZ:Inangahua:Inangahua|\
NZ:Inglewood:Inglewood|\
NZ:Kaikoura:Kaikoura|\
NZ:Kairanga:Kairanga|\
NZ:Kiwitea:Kiwitea|\
NZ:Lake:Lake|\
NZ:Mackenzie:Mackenzie|\
NZ:Malvern:Malvern|\
NZ:Manatu:Manatu|\
NZ:Mangonui:Mangonui|\
NZ:Maniototo:Maniototo|\
NZ:Marlborough:Marlborough|\
NZ:Masterton:Masterton|\
NZ:Matamata:Matamata|\
NZ:Mount hinemuri:Mount hinemuri|\
NZ:Opotiki:Opotiki|\
NZ:Oroua:Oroua|\
NZ:Otamatea:Otamatea|\
NZ:Otorohanga:Otorohanga|\
NZ:Oxford:Oxford|\
NZ:Pahiatua:Pahiatua|\
NZ:Paparua:Paparua|\
NZ:Patea:Patea|\
NZ:Piako:Piako|\
NZ:Pohangina:Pohangina|\
NZ:Raglan:Raglan|\
NZ:Rangiora:Rangiora|\
NZ:Rangitikei:Rangitikei|\
NZ:Rodney:Rodney|\
NZ:Rotorua:Rotorua|\
NZ:Runanga:Runanga|\
NZ:Saint verpeaks:Saint verpeaks|\
NZ:Southland:Southland|\
NZ:Stewart Island:Stewart Island|\
NZ:Stratford:Stratford|\
NZ:Strathallan:Strathallan|\
NZ:Taranaki:Taranaki|\
NZ:Taumarunui:Taumarunui|\
NZ:Taupo:Taupo|\
NZ:Tauranga:Tauranga|\
NZ:Thames-l:Thames-l|\
NZ:Tuapeka:Tuapeka|\
NZ:Vincent:Vincent|\
NZ:Waiapu:Waiapu|\
NZ:Waiheke:Waiheke|\
NZ:Waihemo:Waihemo|\
NZ:Waikato:Waikato|\
NZ:Waikohu:Waikohu|\
NZ:Waimairi:Waimairi|\
NZ:Waimarino:Waimarino|\
NZ:Waimate:Waimate|\
NZ:Waimate West:Waimate West|\
NZ:Waimea:Waimea|\
NZ:Waipa:Waipa|\
NZ:Waipawa:Waipawa|\
NZ:Waipukurau:Waipukurau|\
NZ:Wairarapa rewa:Wairarapa rewa|\
NZ:Wairoa:Wairoa|\
NZ:Waitaki:Waitaki|\
NZ:Waitomo:Waitomo|\
NZ:Waitotara:Waitotara|\
NZ:Wallace:Wallace|\
NZ:Wanganui:Wanganui|\
NZ:Waverley:Waverley|\
NZ:Westland:Westland|\
NZ:Whakatane:Whakatane|\
NZ:Whangarei:Whangarei|\
NZ:Whangaroa:Whangaroa|\
NZ:Woodville:Woodville|\
PL:Dolnoslaskie:Dolnoslaskie|\
PL:Kujawsko:Kujawsko|\
PL:Lodzkie:Lodzkie|\
PL:Lubelskie:Lubelskie|\
PL:Lubuskie:Lubuskie|\
PL:Malopolskie:Malopolskie|\
PL:Mazowieckie:Mazowieckie|\
PL:Opolskie:Opolskie|\
PL:Podkarpackie:Podkarpackie|\
PL:Podlaskie:Podlaskie|\
PL:Pomorskie:Pomorskie|\
PL:Slaskie:Slaskie|\
PL:Swietokrzyskie:Swietokrzyskie|\
PL:Warminsko:Warminsko|\
PL:Wielkopolskie:Wielkopolskie|\
PL:Zachodniopomorskie:Zachodniopomorskie|\
PT:Acores (Azores):Acores (Azores)|\
PT:Aveiro:Aveiro|\
PT:Beja:Beja|\
PT:Braga:Braga|\
PT:Braganca:Braganca|\
PT:Castelo Branco:Castelo Branco|\
PT:Coimbra:Coimbra|\
PT:Evora:Evora|\
PT:Faro:Faro|\
PT:Guarda:Guarda|\
PT:Leiria:Leiria|\
PT:Lisboa:Lisboa|\
PT:Madeira:Madeira|\
PT:Portalegre:Portalegre|\
PT:Porto:Porto|\
PT:Santarem:Santarem|\
PT:Setubal:Setubal|\
PT:Viana o:Viana o|\
PT:Vila Real:Vila Real|\
PT:Viseu:Viseu|\
RO:Alba:Alba|\
RO:Arad:Arad|\
RO:Arges:Arges|\
RO:Bacau:Bacau|\
RO:Bihor:Bihor|\
RO:Bistrita-Nasaud:Bistrita-Nasaud|\
RO:Botosani:Botosani|\
RO:Braila:Braila|\
RO:Brasov:Brasov|\
RO:Bucuresti:Bucuresti|\
RO:Buzau:Buzau|\
RO:Calarasi:Calarasi|\
RO:Caras-luj:Caras-luj|\
RO:Constanta:Constanta|\
RO:Covasna:Covasna|\
RO:Dimbovita:Dimbovita|\
RO:Dolj:Dolj|\
RO:Galati:Galati|\
RO:Giurgiu:Giurgiu|\
RO:Gorj:Gorj|\
RO:Harghita:Harghita|\
RO:Hunedoara:Hunedoara|\
RO:Ialomita:Ialomita|\
RO:Iasi:Iasi|\
RO:Maramures:Maramures|\
RO:Mehedinti:Mehedinti|\
RO:Mures:Mures|\
RO:Neamt:Neamt|\
RO:Olt:Olt|\
RO:Prahova:Prahova|\
RO:Salaj:Salaj|\
RO:Satu u:Satu u|\
RO:Suceava:Suceava|\
RO:Teleorman:Teleorman|\
RO:Timis:Timis|\
RO:Tulcea:Tulcea|\
RO:Vaslui:Vaslui|\
RO:Vilcea:Vilcea|\
RO:Vrancea:Vrancea|\
SK:Banskobystricky:Banskobystricky|\
SK:Bratislavsky:Bratislavsky|\
SK:Kosicky:Kosicky|\
SK:Nitriansky:Nitriansky|\
SK:Presovsky:Presovsky|\
SK:Trenciansky:Trenciansky|\
SK:Trnavsky:Trnavsky|\
SK:Zilinsky:Zilinsky|\
SI:Ajdovscina:Ajdovscina|\
SI:Beltinci:Beltinci|\
SI:Bled:Bled|\
SI:Bohinj:Bohinj|\
SI:Borovnica:Borovnica|\
SI:Bovec:Bovec|\
SI:Brda:Brda|\
SI:Brezice:Brezice|\
SI:Brezovica:Brezovica|\
SI:Cankova-Tisina:Cankova-Tisina|\
SI:Celje:Celje|\
SI:Cerklje na Gorenjskem:Cerklje na Gorenjskem|\
SI:Cerknica:Cerknica|\
SI:Cerkno:Cerkno|\
SI:Crensovci:Crensovci|\
SI:Crna na Crnomelj:Crna na Crnomelj|\
SI:Destrnik-Trnovska Vas:Destrnik-Trnovska Vas|\
SI:Divaca:Divaca|\
SI:Dobrepolje:Dobrepolje|\
SI:Dobrova-Horjul-Polhov Gradec:Dobrova-Horjul-Polhov Gradec|\
SI:Dol pri Ljubljani:Dol pri Ljubljani|\
SI:Domzale:Domzale|\
SI:Dornava:Dornava|\
SI:Dravograd:Dravograd|\
SI:Duplek:Duplek|\
SI:Gorenja Vas-orisnica:Gorenja Vas-orisnica|\
SI:Gornja Radgona:Gornja Radgona|\
SI:Gornji Grad:Gornji Grad|\
SI:Gornji Petrovci:Gornji Petrovci|\
SI:Grosuplje:Grosuplje|\
SI:Hodos Salovci:Hodos Salovci|\
SI:Hrastnik:Hrastnik|\
SI:Hrpelje-Kozina:Hrpelje-Kozina|\
SI:Idrija:Idrija|\
SI:Ig:Ig|\
SI:Ilirska Bistrica:Ilirska Bistrica|\
SI:Ivancna ola:Ivancna ola|\
SI:Jesenice:Jesenice|\
SI:Jursinci:Jursinci|\
SI:Kamnik:Kamnik|\
SI:Kanal:Kanal|\
SI:Kidricevo:Kidricevo|\
SI:Kobarid:Kobarid|\
SI:Kobilje:Kobilje|\
SI:Kocevje:Kocevje|\
SI:Komen:Komen|\
SI:Koper:Koper|\
SI:Kozje:Kozje|\
SI:Kranj:Kranj|\
SI:Kranjska o:Kranjska o|\
SI:Kungota:Kungota|\
SI:Kuzma:Kuzma|\
SI:Lasko:Lasko|\
SI:Lenart:Lenart|\
SI:Lendava:Lendava|\
SI:Litija:Litija|\
SI:Ljubljana:Ljubljana|\
SI:Ljubno:Ljubno|\
SI:Ljutomer:Ljutomer|\
SI:Logatec:Logatec|\
SI:Loska Dolina:Loska Dolina|\
SI:Loski e:Loski e|\
SI:Lukovica:Lukovica|\
SI:Majsperk:Majsperk|\
SI:Maribor:Maribor|\
SI:Medvode:Medvode|\
SI:Menges:Menges|\
SI:Metlika:Metlika|\
SI:Mezica:Mezica|\
SI:Miren-Kostanjevica:Miren-Kostanjevica|\
SI:Mislinja:Mislinja|\
SI:Moravce:Moravce|\
SI:Moravske Toplice:Moravske Toplice|\
SI:Mozirje:Mozirje|\
SI:Murska ta:Murska ta|\
SI:Naklo:Naklo|\
SI:Nazarje:Nazarje|\
SI:Nova Gorica:Nova Gorica|\
SI:Novo Mesto:Novo Mesto|\
SI:Odranci:Odranci|\
SI:Ormoz:Ormoz|\
SI:Osilnica:Osilnica|\
SI:Pesnica:Pesnica|\
SI:Piran:Piran|\
SI:Pivka:Pivka|\
SI:Podcetrtek:Podcetrtek|\
SI:Podvelka-Ribnica:Podvelka-Ribnica|\
SI:Postojna|Preddvor:Postojna|Preddvor|\
SI:Ptuj|Puconci:Ptuj|Puconci|\
SI:Race-ce:Race-ce|\
SI:Radenci:Radenci|\
SI:Radlje ob Dravi:Radlje ob Dravi|\
SI:Radovljica:Radovljica|\
SI:Ravne-Prevalje:Ravne-Prevalje|\
SI:Ribnica|Rogasevci:Ribnica|Rogasevci|\
SI:Rogaska Slatina:Rogaska Slatina|\
SI:Rogatec:Rogatec|\
SI:Ruse:Ruse|\
SI:Semic:Semic|\
SI:Sencur:Sencur|\
SI:Sentilj:Sentilj|\
SI:Sentjernej:Sentjernej|\
SI:Sentjur pri nica:Sentjur pri nica|\
SI:Sezana:Sezana|\
SI:Skocjan:Skocjan|\
SI:Skofja Loka:Skofja Loka|\
SI:Skofljica:Skofljica|\
SI:Slovenj Gradec:Slovenj Gradec|\
SI:Slovenska Bistrica:Slovenska Bistrica|\
SI:Slovenske Konjice:Slovenske Konjice|\
SI:Smarje pri Jelsah:Smarje pri Jelsah|\
SI:Smartno ob anj:Smartno ob anj|\
SI:Starse:Starse|\
SI:Store:Store|\
SI:Sveti Jurij:Sveti Jurij|\
SI:Tolmin:Tolmin|\
SI:Trbovlje:Trbovlje|\
SI:Trebnje:Trebnje|\
SI:Trzic:Trzic|\
SI:Turnisce:Turnisce|\
SI:Velenje:Velenje|\
SI:Velike Lasce:Velike Lasce|\
SI:Videm:Videm|\
SI:Vipava:Vipava|\
SI:Vitanje:Vitanje|\
SI:Vodice:Vodice|\
SI:Vojnik:Vojnik|\
SI:Vrhnika:Vrhnika|\
SI:Vuzenica:Vuzenica|\
SI:Zagorje alec:Zagorje alec|\
SI:Zavrc:Zavrc|\
SI:Zelezniki:Zelezniki|\
SI:Ziri:Ziri|\
SI:Zrece:Zrece|\
ES:Andalucia:Andalucia|\
ES:Aragon:Aragon|\
ES:Asturias:Asturias|\
ES:Baleares (Balearic Islands):Baleares (Balearic Islands)|\
ES:Canarias (Canary Islands):Canarias (Canary Islands)|\
ES:Cantabria|Castilla y Leon:Cantabria|Castilla y Leon|\
ES:Castilla-La taluna:Castilla-La taluna|\
ES:Ceuta:Ceuta|\
ES:Communidad Valencian:Communidad Valencian|\
ES:Extremadura:Extremadura|\
ES:Galicia:Galicia|\
ES:Islas Chafarinas:Islas Chafarinas|\
ES:La Rioja:La Rioja|\
ES:Madrid:Madrid|\
ES:Melilla:Melilla|\
ES:Murcia:Murcia|\
ES:Navarra:Navarra|\
ES:Pais Vasco (Basque Country):Pais Vasco (Basque Country)|\
ES:Penon de:Penon de |\
ES:Penon de Velez de la Gomera:Penon de Velez de la Gomera|\
SE:Blekinge:Blekinge|\
SE:Dalarnas:Dalarnas|\
SE:Gavleborgs:Gavleborgs|\
SE:Gotlands:Gotlands|\
SE:Hallands:Hallands|\
SE:Jamtlands:Jamtlands|\
SE:Jonkopings:Jonkopings|\
SE:Kalmar:Kalmar|\
SE:Kronobergs:Kronobergs|\
SE:Norrbottens:Norrbottens|\
SE:Orebro:Orebro|\
SE:Ostergotlands:Ostergotlands|\
SE:Skane:Skane|\
SE:Sodermanlands:Sodermanlands|\
SE:Stockholm:Stockholm|\
SE:Varmlands:Varmlands|\
SE:Vasterbottens:Vasterbottens|\
SE:Vasternorrlands:Vasternorrlands|\
SE:Vastmanlands:Vastmanlands|\
SE:Vastra Gotalands:Vastra Gotalands|\
';

// Country data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var country = '\
AU:AUSTRALIA|\
AT:AUSTRIA|\
BE:BELGIUM|\
BG:BULGARIA|\
CA:CANADA|\
HR:CROATIA|\
CY:CYPRUS|\
CZ:CZECH REPUBLIC|\
DK:DENMARK|\
EE:ESTONIA|\
FI:FINLAND|\
FR:FRANCE|\
HU:HUNGARY|\
IE:IRELAND|\
IT:ITALY|\
LT:LITHUANIA|\
LU:LUXEMBOURG|\
MT:MALTA|\
NL:NETHERLANDS|\
NZ:NEW ZEALAND|\
PL:POLAND|\
PT:PORTUGAL|\
RO:ROMANIA|\
SK:SLOVAKIA|\
SI:SLOVENIA|\
ES:SPAIN|\
SE:SWEDEN|\
UK:UNITED KINGDOM|\
US:UNITED STATES|\
';

function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

// Populates the country selected with the counties from the country list
function populateCountry(defaultCountry) {
  if ( postCountry != '' ) {
    defaultCountry = postCountry;
  }
  var countryLineArray = country.split('|');  // Split into lines
  var selObj = document.getElementById('countrySelect');
  selObj.options[0] = new Option('Select Country','');
  selObj.selectedIndex = 0;
  for (var loop = 0; loop < countryLineArray.length; loop++) {
    lineArray = countryLineArray[loop].split(':');
    countryCode  = TrimString(lineArray[0]);
    countryName  = TrimString(lineArray[1]);
    if ( countryCode != '' ) {
      selObj.options[loop + 1] = new Option(countryName, countryCode);
    }
    if ( defaultCountry == countryCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
}

function populateState() {
  var selObj = document.getElementById('stateSelect');
  var foundState = false;
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    //selObj.options[0] = new Option('Select State','');
    selObj.selectedIndex = 0;
  }
  // Populate the drop down with states from the selected country
  var stateLineArray = state.split("|");  // Split into lines
  var optionCntr = 1;
  for (var loop = 0; loop < stateLineArray.length; loop++) {
    lineArray = stateLineArray[loop].split(":");
    countryCode  = TrimString(lineArray[0]);
    stateCode    = TrimString(lineArray[1]);
    stateName    = TrimString(lineArray[2]);
  if (document.getElementById('countrySelect').value == countryCode && countryCode != '' ) {
    // If it's a input element, change it to a select
      if ( selObj.type == 'text' ) {
        parentObj = document.getElementById('stateSelect').parentNode;
        parentObj.removeChild(selObj);
        var inputSel = document.createElement("SELECT");
        inputSel.setAttribute("name","state");
        inputSel.setAttribute("id","stateSelect");
        parentObj.appendChild(inputSel) ;
        selObj = document.getElementById('stateSelect');
        //selObj.options[0] = new Option('Select State','');
        selObj.selectedIndex = 0;
      }
      if ( stateCode != '' ) {
        selObj.options[optionCntr] = new Option(stateName, stateCode);
      }
      // See if it's selected from a previous post
      if ( stateCode == postState && countryCode == postCountry ) {
        selObj.selectedIndex = optionCntr;
      }
      foundState = true;
      optionCntr++
    }
  }
}

function initCountry(country) {
  populateCountry(country);
  populateState();
}
$("document").ready(function() {
    // fixes
    $( "#countrySelect > option" ).first().hide();
    $( "#countrySelect > option" ).last().hide();
    $( "#stateSelect > option" ).first().hide();
    $("#stateSelect > option:nth(1)").attr("selected", "selected");
    $(function(){
        $("#countrySelect").change(function(){
            $( "#stateSelect > option" ).first().hide();
            $("#stateSelect > option:nth(1)").attr("selected", "selected");
        });

    });
});

