export const INITIAL_SOURCE_EXAMPLE = `{Karol baut 'ne Burg}
wiederhole 72 mal
    Schritt
    LinksDrehen
    Hinlegen
    RechtsDrehen
    wenn IstWand dann
        LinksDrehen
        Aufheben
    endewenn
endewiederhole
`;

export const INITIAL_BLOCKLY_XML = `
<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="repeat_times" id="8j]=9,hXz+^qcv|I5,ss" x="30" y="10">
        <field name="COUNT">72</field>
        <statement name="STATEMENTS">
            <block type="step" id="WkPEluSEDFn(QL3W(/e;">
                <field name="COUNT">1</field>
                <next>
                    <block type="turnleft" id="R;NQz4+fv4+O=K^5_;-?">
                        <next>
                            <block type="laydown_color" id="g*U,dxbtLZogHO2Z[XE[">
                                <field name="COLOR">grün</field>
                                <next>
                                    <block type="turnright" id="YcJ,{@H#$DV@m*QoFWy.">
                                        <next>
                                            <block type="if_then" id="4TT*\`]Qe~|j5QvLtDJb|">
                                                <value name="CONDITION">
                                                    <block type="is_wall" id="xp2Zkpr[vb(cZiib}^yf"></block>
                                                </value>
                                                <statement name="STATEMENTS">
                                                    <block type="turnleft" id="~k5Zgspn;ibGsLiz,+.i">
                                                        <next>
                                                            <block type="pickup" id="72T/YDc=-!.OpG@k_T29">
                                                                <field name="COUNT">1</field>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
</xml>
`;
