grammar Karol;
options { caseInsensitive=true; }

karol
   : definition* 'Programm' statement* ('endeProgramm' | '*Programm')
   | definition* statement+
   ;

definition
   : conditiondefinition
   | methoddefinition
   ;

methoddefinition
   : 'Anweisung' IDENTIFIER statement* ('endeAnweisung' | '*Anweisung')
   | 'Methode' IDENTIFIER statement* ('endeMethode' | '*Methode')
   ;

conditiondefinition
   : 'Bedingung' IDENTIFIER statement* ('endeBedingung' | '*Bedingung')
   ;

statement
   : iteration
   | loop
   | conditional
   | instruction (';')?
   // object syntax
   | 'Karol' '.' instruction '(' ')'(';')?
   | parameterizedinstruction (';')?
   | 'Karol' '.' parameterizedinstruction (';')?
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
   : 'Schritt'
   | 'LinksDrehen'
   | 'RechtsDrehen'
   | 'Hinlegen'
   | 'Aufheben'
   | 'MarkeSetzen'
   | 'MarkeLöschen'
   | 'Warten'
   | 'Ton'
   | 'Beenden'
   | 'schnell'
   | 'langsam'
   ;

parameterizedinstruction
   : 'Schritt' '(' number ')'
   | 'Hinlegen' '(' (color | number) ')'
   | 'Aufheben' '(' number ')'
   | 'MarkeSetzen' '(' color ')'
   | 'Warten' '(' number ')'
   ;

conditionexpression
   : 'nicht' conditionexpression
   | condition
   // object syntax
   | 'Karol' '.' condition '(' ')'
   | parameterizedcondition
   | 'Karol' '.' parameterizedcondition
   ;

condition:
    'IstWand'
   | 'NichtIstWand'
   | 'IstSüden'
   | 'IstNorden'
   | 'IstWesten'
   | 'IstOsten'
   | 'IstVoll'
   | 'NichtIstVoll'
   | 'IstLeer'
   | 'NichtIstLeer'
   | 'IstZiegel'
   | 'NichtIstZiegel'
   | 'IstMarke'
   | 'NichtIstMarke'
   | 'HatZiegel'
   ;

parameterizedcondition:
   | 'IstZiegel' '(' (color | number) ')'
   | 'NichtIstZiegel' '(' (color | number) ')'
   | 'IstMarke' '(' color ')'
   | 'NichtIstMarke' '(' color ')'
   | 'HatZiegel' '(' number ')'
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

