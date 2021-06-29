import Recipe from "../../../components/Recipe/Recipe";

export default function tortaDefrango(){
    return(
        <div>
             <Recipe 
                    name="Torta de Frango"
                    picture="data:image/jpeg;base64,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"
                    time=" 40 min"
                    servings=" 15 porções"

                >

                        <h2>Ingredientes</h2>

                        <h3>Recheio</h3>

                        <ul>
                            <li>500 g de peito de frango sem pele</li>
                            <li>1/2 litro de caldo de galinha</li>
                            <li>4 colheres (sopa) de óleo</li>
                            <li>1 dente de alho amassado</li>
                            <li>1 cebola picada</li>
                            <li>3 tomates sem pele e sem sementes</li>
                            <li>1 xícara (chá) de ervilhas</li>
                            <li>sal e pimenta-do-reino a gosto</li>

                        </ul>

                        <h3>Massa</h3>

                        <ul>
                            <li>250 ml de leite</li>
                            <li>3/4 de xícara (chá) de óleo</li>
                            <li>2 ovos</li>
                            <li>1 e 1/2 xícara (chá) de farinha de trigo</li>
                            <li>sal a gosto</li>
                            <li>1 colher (sopa) de fermento em pó</li>
                            <li>queijo ralado a gosto</li>

                        </ul>

                        <h2>Modo de Preparo</h2>

                        <h3>Recheio</h3>

                        <ol>
                            <li>Cozinhe o peito de frango no caldo até ficar macio.</li>
                            <li>Separe 1 xícara (chá) de caldo do cozimento e reserve.</li>
                            <li>Refogue os demais ingredientes e acrescente as ervilhas por último.</li>
                            <li>Desfie o frango, misture ao caldo e deixe cozinhar até secar.</li>
                        </ol>

                        <h3>Massa</h3>

                        <ol>
                            <li>Bata o leite, o óleo e os ovos no liquidificador em velocidade baixa.</li>
                            <li>Acrescente aos poucos a farinha, o sal e o fermento.</li>
                            <li>Despeje metade da massa em uma forma untada e adicione o recheio sobre ela.</li>
                            <li>Cubra com o restante de massa e o queijo ralado.</li>
                            <li>Leve ao forno preaquecido (180° C) até dourar.</li>
                        </ol>

                </Recipe>
                 


        </div>
    )
}