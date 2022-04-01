grammar Karol;
// does not work, thus done toLower before parsing: options { caseInsensitive=true; }

karol
   : definition* 'programm' statement* ('endeprogramm' | '*programm')
   | definition* statement*
   ;

definition
   : conditiondefinition
   | methoddefinition
   ;

methoddefinition
   : 'anweisung' IDENTIFIER statement* ('endeanweisung' | '*anweisung')
   | 'methode' IDENTIFIER statement* ('endemethode' | '*methode')
   ;

conditiondefinition
   : 'bedingung' IDENTIFIER (statement | conditionexpression)+ ('endebedingung' | '*bedingung')
   ;

statement
   : iteration
   | loop
   | conditional
   | instruction (';')?
   // object syntax
   | 'karol' '.' instruction '(' ')'(';')?
   | parameterizedinstruction (';')?
   | 'karol' '.' parameterizedinstruction (';')?
   | customMethodCall
   ;

customMethodCall
   : IDENTIFIER
   ;

iteration
   : 'wiederhole' number 'mal' statement* ('endewiederhole' | '*wiederhole')
   ;

loop
   : 'wiederhole' 'solange' conditionexpression statement* ('endewiederhole' | '*wiederhole')
   | 'wiederhole' statement* ('endewiederhole' | '*wiederhole') 'solange' conditionexpression
   | 'wiederhole' statement* ('endewiederhole' | '*wiederhole') 'bis' conditionexpression
   ;

conditional
   : 'wenn' conditionexpression 'dann' statement* ('sonst' statement*)? ('endewenn' | '*wenn')
   ;

instruction
   : 'schritt'
   | 'linksdrehen'
   | 'rechtsdrehen'
   | 'hinlegen'
   | 'aufheben'
   | 'markesetzen'
   | 'markelöschen'
   | 'warten'
   | 'ton'
   | 'beenden'
   | 'schnell'
   | 'langsam'
   ;

parameterizedinstruction
   : 'schritt' '(' number ')'
   | 'hinlegen' '(' (color | number) ')'
   | 'aufheben' '(' number ')'
   | 'markesetzen' '(' color ')'
   | 'warten' '(' number ')'
   ;

conditionexpression
   : 'nicht' conditionexpression
   | condition
   // object syntax
   | 'karol' '.' condition '(' ')'
   | parameterizedcondition
   | 'karol' '.' parameterizedcondition
   | customConditionCall
   ;

customConditionCall
   : IDENTIFIER
   ;

condition:
    'istwand'
   | 'nichtistwand'
   | 'istsüden'
   | 'istnorden'
   | 'istwesten'
   | 'istosten'
   | 'istvoll'
   | 'nichtistvoll'
   | 'istleer'
   | 'nichtistleer'
   | 'istziegel'
   | 'nichtistziegel'
   | 'istmarke'
   | 'nichtistmarke'
   | 'hatziegel'
   | 'wahr'
   | 'falsch'
   ;

parameterizedcondition
   : 'istziegel' '(' (color | number) ')'
   | 'nichtistziegel' '(' (color | number) ')'
   | 'istmarke' '(' color ')'
   | 'nichtistmarke' '(' color ')'
   | 'hatziegel' '(' number ')'
   ;

color
   : 'rot'
   | 'gelb'
   | 'blau'
   | 'grün'
   | 'schwarz'
   ;

IDENTIFIER
   : LETTER (LETTER | DIGIT)*
   ;

number
   : DIGIT+
   ;

LETTER
   : [A-Za-z]
   | '-'
   ;

DIGIT
   : [0-9]
   ;

WS
   : ([ \t\r\n]
   | '{' ~[}]* '}')
   -> skip
   ;

