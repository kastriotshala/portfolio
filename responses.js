let userName = "";
let userEmri = "";
const preTrainedAnswers = {
  "Pershendetje":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "pershendetje":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Pershendetje?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "pershendetje?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Pershendetje ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "pershendetje ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Pershendetje ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "pershendetje ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],


  "Përshendetje":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshendetje":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Përshendetje?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshendetje?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Përshendetje ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshendetje ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Përshendetje ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshendetje ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Përshëndetje":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshëndetje":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Përshëndetje?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshëndetje?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Përshëndetje ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshëndetje ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Përshëndetje ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "përshëndetje ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],


  "Ckemi?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "ckemi?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Ckemi":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "ckemi":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Çkemi?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "çkemi?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Çkemi":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "çkemi":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Ckemi ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "ckemi ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Ckemi ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "ckemi ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Çkemi ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "çkemi ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Çkemi ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "çkemi ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Qkemi?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "qkemi?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Qkemi":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "qkemi":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],

  "Qkemi ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "qkemi ?":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "Qkemi ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],
  "qkemi ":["Pershendetje, cfare mund te bej per ju?", "Pershendetje, si mund te ju ndihmoj ne menyre qe te ju realizojne nevojat?", "Pershendetje, si mund te ndihmoj ne cfare nevojitet?"],


  "Nga je?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Nga je":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga je?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga je":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Nga je ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Nga je ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga je ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga je ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Nga vjen?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Nga vjen":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga vjen?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga vjen":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Nga vjen ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Nga vjen ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga vjen ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "nga vjen ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Prej nga je?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Prej nga je":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Prej nga je ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Prej nga je ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Prej nga vjen?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Prej nga vjen":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga vjen?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga vjen":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Prej nga vjen ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Prej nga vjen ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga vjen ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga vjen ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Prej nga je?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Prej nga je":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],

  "Prej nga je ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "Prej nga je ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je ?":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],
  "prej nga je ":["Unë jam nga fshati Bajqine, komuna e Podujeves.", "Origjina ime eshte fshati Bajqine, ne komunen e Podujeves.", "Jam rritur ne fshatin Bajqine te komunes se Podujeves"],


  "Sa vjeq je?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq je?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeq je":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq je":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjeq je ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq je ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeq je ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq je ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjeç je?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç je?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeç je":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç je":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjeç je ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç je ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeç je ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç je ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjeç i ke?":["Jam 23 vjec.", "Unë kam 23 vjet", "Mosha ime eshte 23 vjet."],
  "sa vjeç i ke?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeç i ke":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç i ke":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjeç i ke ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç i ke ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeç i ke ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeç i ke ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  
  "Sa vjeq i ke?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq i ke?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeq i ke":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq i ke":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjeq i ke ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq i ke ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjeq i ke ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjeq i ke ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjet i ki?":["Jam 23 vjec.", "Unë kam 23 vjet", "Mosha ime eshte 23 vjet."],
  "sa vjet i ki?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjet i ki":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjet i ki":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],

  "Sa vjet i ki ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjet i ki ?":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "Sa vjet i ki ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],
  "sa vjet i ki ":["Jam 23 vjec.", "Unë kam 23 vjet.", "Mosha ime eshte 23 vjet."],


  "Cfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfarë po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfarë po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfarë po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfarë po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Çfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Cfar po ban?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ban?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ban":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ban":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po ban ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ban ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ban ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ban ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Cfar po ben?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ben":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po ben ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po ben ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po ben ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Cfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfarë po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfarë po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfarë po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfar po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfar po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Çfar po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Çfar po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfar po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfarë po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "cfarë po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Cfarë po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "çfarë po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Cfarë po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Qfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bën tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bën tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bën tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bën tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Qfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben tani ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Qfar po ban?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ban?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ban":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ban":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po ban ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ban ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ban ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ban ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Qfar po ben?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ben":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po ben ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po ben ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po ben ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "Qfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bon ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfar po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfar po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfar po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bonë?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bonë":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],

  "Qfarë po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bonë ?":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "Qfarë po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],
  "qfarë po bonë ":["Unë po bisedoj me ju.", "Po komunikoj me ju tani.", "Jemi duke komunikuar së bashku."],


  "A mund te ma tregoni biografin tuaj?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "A mund te ma tregoni biografin tuaj":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin tuaj":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin tuaj?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],

  "A mund te ma tregoni biografin tuaj ?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "A mund te ma tregoni biografin tuaj ":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin tuaj ":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin tuaj ?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],


  "A mund te ma tregoni biografin?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "A mund te ma tregoni biografin":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],

  "A mund te ma tregoni biografin ?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "A mund te ma tregoni biografin ":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin ":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],
  "a mund te ma tregoni biografin ?":["Unë jam Kastriot Shala, i lindur më 14 janar 2000 në Basel, Zvicër. Arsimimi fillor e mora në Podujevë, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku mora diplomën  Bachelor në Inxhinieri Softuerike në 2021.",
   "Emri im është Kastriot Shala dhe kam lindur në Basel, Zvicër më 14 janar 2000. Arsimimi fillor e mora në Podujevë dhe pastaj vazhdova në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku u diplomova me Bachelor në Inxhinieri Softuerike në 2021.",
   "Kastriot Shala është emri im dhe jam lindur në qytetin e Baselit, Zvicër më 14 janar 2000. Në Podujevë mora arsimimin fillor, para se të vijoj në Fakultetin e Shkencave Kompjuterike në Prishtinë, ku diplomova me Bachelor në Inxhinieri Softuerike në 2021."],


  "Cili eshte arsimi juaj?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "Cili eshte arsimi juaj":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi juaj?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi juaj":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],

  "Cili eshte arsimi juaj ?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "Cili eshte arsimi juaj ":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi juaj ?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi juaj ":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],


  "Cili eshte arsimi yt?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "Cili eshte arsimi yt":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi yt?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi yt":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],

  "Cili eshte arsimi yt ?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "Cili eshte arsimi yt ":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi yt ?":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],
  "cili eshte arsimi yt ":["Shkollën fillore dhe të mesme e kam kryer në Podujevë, ndërsa fakultetin e kam përfunduar në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Arsimimi im fillor dhe i mesëm u krye në Podujevë, ndërsa fakultetin e përfundova në Prishtinë, në Kolegjin AAB, duke marrë titullin Softver Inxhinier.",
   "Podujevë ishte vendi ku kryeva shkollën fillore dhe të mesme, ndërsa në Prishtinë, në Kolegjin AAB, e përfundova fakultetin dhe mora titullin Softver Inxhinier."],


  "Cili eshte titulli juaj akademik?":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],
  "Cili eshte titulli juaj akademik":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],
  "cili eshte titulli juaj akademik?":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],
  "cili eshte titulli juaj akademik":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],

  "Cili eshte titulli juaj akademik ?":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],
  "Cili eshte titulli juaj akademik ":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],
  "cili eshte titulli juaj akademik ?":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],
  "cili eshte titulli juaj akademik ":["Në vitin 2021 u diplomova si Softuer Inxhinier dhe më pas, në vitin 2023, mora edhe titullin Network Inxhinier.",
   "Diplomimi im si Softuer Inxhinier në vitin 2021 dhe më pas, titulli Network Inxhinier në vitin 2023 janë dy nga titujt akademikë që kam fituar.",
   "Në vitin 2021 fitova titullin akademik si Softuer Inxhinier dhe në vitin 2023 e ndërtova karrierën time me një titull tjetër, atë të Network Inxhinierit."],


  "Ku punon?":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],
  "Ku punon":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],
  "ku punon?":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],
  "ku punon":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],

  "Ku punon ?":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],
  "Ku punon ":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],
  "ku punon ?":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],
  "ku punon ":["Unë tani jam në ISP Telkos L.L.C, me bazë në Podujevë, ku po punoj.",
   "Aktualisht, po punoj në ISP Telkos L.L.C, që ndodhet në Podujevë.",
   "Në këtë kohë, puna ime është në ISP Telkos L.L.C, me selin në Podujevë."],


  "Cfar te pelqen me shume":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "Cfar te pelqen me shume?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shume":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shume?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],

  "Cfar te pelqen me shume ":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "Cfar te pelqen me shume ?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shume ":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shume ?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],


  "Cfar te pelqen":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "Cfar te pelqen?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],

  "Cfar te pelqen ":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "Cfar te pelqen ?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen ":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen ?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],


  "Cfar te pelqen me shum":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "Cfar te pelqen me shum?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shum":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shum?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],

  "Cfar te pelqen me shum ":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "Cfar te pelqen me shum ?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shum ":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],
  "cfar te pelqen me shum ?":["Cyber Security, Network Security dhe Network Administrator janë përparësitë e mia në fushën e teknologjisë së informacionit.",
   "Më shumë se të tjera, më interesojnë fushat e Cyber Security, Network Security dhe Network Administrator.",
   "Cyber Security, Network Security dhe Network Administrator janë fushat e mëdha që më interesojnë më shumë."],





  "Hello?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "Hello":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hello?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hello":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "Hello ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "Hello ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hello ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hello ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "Hi?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "Hi":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hi?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hi":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "Hi ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "Hi ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hi ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hi ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "Hey?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "Hey":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hey?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hey":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "Hey ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "Hey ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hey ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "hey ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "How are you?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How are you":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "How are you ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How are you ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you ":["Hello, how can I help you?", "Hello, what do you need?", "Hello, what do you want to know?"],


  "How is it going?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how is it going?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How is it going":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how is it going":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "How is it going ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how is it going ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How is it going ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how is it going ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "How you going?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How you going":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how you going":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how you going?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "How you going ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How you going ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how you going ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how you going ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "How are you doing?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How are you doing":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you doing?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you doing":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "How are you doing ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "How are you doing ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you doing ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "how are you doing ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "What’s going on?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "What’s going on":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "what’s going on?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "what’s going on":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],

  "What’s going on ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "What’s going on ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "what’s going on ?":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],
  "what’s going on ":["Hello, what can I do for you?", "Hello, how can I help you in a way that fulfills your needs?", "Hello, how can I help you with what is needed?"],


  "How old are you?":["23 years old.", "I am 23 years old.", "My age is 23 years."],
  "How old are you":["23 years old.", "I am 23 years old.", "My age is 23 years."],
  "how old are you":["23 years old.", "I am 23 years old.", "My age is 23 years."],
  "how old are you?":["23 years old.", "I am 23 years old.", "My age is 23 years."],

  "How old are you ?":["23 years old.", "I am 23 years old.", "My age is 23 years."],
  "How old are you ":["23 years old.", "I am 23 years old.", "My age is 23 years."],
  "how old are you ":["23 years old.", "I am 23 years old.", "My age is 23 years."],
  "how old are you ?":["23 years old.", "I am 23 years old.", "My age is 23 years."],


  "What are you doing now?":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],
  "What are you doing now":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],
  "what are you doing now?":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],
  "what are you doing now":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],

  "What are you doing now ?":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],
  "What are you doing now ":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],
  "what are you doing now ?":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],
  "what are you doing now ":["I'm talking to you.", "I am communicating with you now.", "We are communicating together."],


  "Can you tell me your biography?":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],
  "Can you tell me your biography":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],
  "can you tell me your biography?":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],
  "can you tell me your biography":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],

  "Can you tell me your biography ?":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],
  "Can you tell me your biography ":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],
  "can you tell me your biography ?":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],
  "can you tell me your biography ":["I am Kastriot Shala, born on January 14, 2000 in Basel, Switzerland. I received my primary education in Podujevë, before continuing to the Faculty of Computer Science in Prishtina, where I received a Bachelors degree in Software Engineering in 2021.",
  "My name is Kastriot Shala and I was born in Basel, Switzerland on January 14, 2000. I received my primary education in Podujevë and then continued to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor in Software Engineering in 2021.",
  "Kastriot Shala is my name and I was born in the city of Basel, Switzerland on January 14, 2000. I received my primary education in Podujevo, before continuing to the Faculty of Computer Science in Pristina, where I graduated with a Bachelor's degree in Software Engineering in 2021."],


  "What is your education?":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],
  "What is your education":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],
  "what is your education?":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],
  "what is your education":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],

  "What is your education ?":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],
  "What is your education ":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],
  "what is your education ?":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],
  "what is your education ":["I completed primary and secondary school in Podujevë, while I completed my faculty in Prishtina, at the AAB College, receiving the title of Software Engineer.",
  "My primary and secondary education was completed in Podujevë, while I finished college in Pristina, at the AAB College, receiving the title of Software Engineer.",
  "Podujevo was the place where I went to elementary and high school, while in Pristina, at AAB College, I finished my university studies and got my degree in Software Engineering."],


  "What is your academic title?":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],
  "What is your academic title":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],
  "what is your academic title?":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],
  "what is your academic title":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],

  "What is your academic title ?":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],
  "What is your academic title ":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],
  "what is your academic title ?":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],
  "what is your academic title ":["In 2021, I graduated as a Software Engineer and then, in 2023, I received another degree as a Network Engineer.",
   "My graduation as a Software Engineer in 2021 and then the degree of Network Engineer in 2023 are two of the academic titles I have earned.",
   "In 2021, I earned an academic title as a Software Engineer and in 2023, I built my career with another title, that of a Network Engineer."],


  "Where do you work?":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],
  "Where do you work":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],
  "where do you work?":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],
  "where do you work":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],

  "Where do you work ?":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],
  "Where do you work ":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],
  "where do you work ?":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],
  "where do you work ":["I am currently working at ISP Telkos L.L.C, based in Podujevo.",
   "Presently, I am employed at ISP Telkos L.L.C, located in Podujevo.",
   "At this time, my job is with ISP Telkos L.L.C, headquartered in Podujevo."],


  "What do you like the most?":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  "What do you like the most":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  "what do you like the most?":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  "what do you like the most":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],

  "What do you like the most ?":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  "What do you like the most ":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  "what do you like the most ?":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  "what do you like the most ":["Cybersecurity, Network Security, and Network Administration are my strengths in the field of information technology.",
   "More than anything else, I am interested in the fields of Cybersecurity, Network Security, and Network Administration.",
   "Cybersecurity, Network Security, and Network Administration are the major fields that interest me the most."],
  






  "default":"I'm sorry, I don't understand your question."
};
    

function getBotResponse(input) {
  if (input.startsWith("my name is ")) {
    userName = input.replace("my name is ", "");
    return "Nice to meet you  " + userName + "! how can I help you today?";
  }

  if (input.startsWith("emri im eshte ")) {
    userEmri = input.replace("emri im eshte ", "");
    return "Gezohem  " + userEmri + "! si mund te ju ndihmoj?";
  }

  if (input.startsWith("I'm ")) {
    userName = input.replace("I'm ", "");
    return "Nice to meet you  " + userName + "! how can I help you today?";
  }

  if (input.startsWith("une jam ")) {
    userEmri = input.replace("une jam ", "");
    return "Gezohem  " + userEmri + "! si mund te ju ndihmoj?";
  }


  let response = preTrainedAnswers[input];
  if(!response){
    response = preTrainedAnswers["default"];
  }
  else{
    response = response[Math.floor(Math.random()*response.length)];
  }

  if (userName) {
    response = response.replace("Hello ", "Hello " + userName + ", ");
  }

  if (userEmri) {
    response = response.replace("Hello ", "Hello " + userEmri + ", ");
  }
  return response;
}
