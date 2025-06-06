grammar CronGrammar;

schedule
    : predefined
    | time_field SP time_field?
    ;

time_field
    : value
    | range
    | step
    | wildcard
    | list
    ;

value
    : NUMBER
    ;

range
    : NUMBER DASH NUMBER
    ;

step
    : (wildcard | range | value) SLASH NUMBER
    ;

wildcard
    : STAR
    ;

list
    : item (COMMA item)+
    ;

item
    : value
    | range
    ;

predefined
    : AT_YEARLY
    | AT_MONTHLY
    | AT_WEEKLY
    | AT_DAILY
    | AT_HOURLY
    | AT_REBOOT
    ;

AT_YEARLY  : '@yearly' ;
AT_MONTHLY : '@monthly' ;
AT_WEEKLY  : '@weekly' ;
AT_DAILY   : '@daily' ;
AT_HOURLY  : '@hourly' ;
AT_REBOOT  : '@reboot' ;

STAR       : '*' ;
DASH       : '-' ;
SLASH      : '/' ;
COMMA      : ',' ;

NUMBER     : DIGIT+ ;
SP         : ' ' ;

fragment DIGIT : [0-9] ;

WS : [\t\r\n]+ -> skip ;
