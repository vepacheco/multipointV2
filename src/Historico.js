import React, {useState} from "react";
import { FlatList } from "react-native";

import Task from "./componentes/Historico";

export default function Historico(){
    const[historico, setHist] = useState([
        {key:1, historico:'blabla'},
        {key:2, historico:'blabla2'},
        {key:3, historico:'blabla3'},
        {key:4, historico:'blabla4'},

    ]);
    return(
        <FlatList
            showsHorizontalScrollIndicator = {false}
            data={ historico }
            keyExtractor={ ( item ) => String( item.key )}
            renderItem={({ item }) => <Task data={item} />}
        />
    )
}