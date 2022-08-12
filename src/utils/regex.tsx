export const validateEmail = new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validatePassword = new RegExp('^(?=.*?[A-Za-z])(?=.*[0-9]).{6,14}$');
export const validateNome = new RegExp('[A-Z][a-z].* [A-Z][a-z].*');