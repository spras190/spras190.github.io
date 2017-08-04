
//___________buttons' value displayed as an output to calculator screen______________
function c(val) {
  document.getElementById('answer').value=val;

}

//_________________________calculator maths function__________________________________
function math(val){
  document.getElementById('answer').value+=val;

}

//_________________________________output to user_____________________________________
function e()
{

  try
{
  c(eval(document.getElementById('answer').value));
}

catch(e) {

  c('Error')

}

}
