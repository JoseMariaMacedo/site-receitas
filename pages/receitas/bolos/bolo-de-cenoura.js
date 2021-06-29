import Recipe from "../../../components/Recipe/Recipe"

export default function BoloDeCenoura(){
        return(
            <div>
                
                <Recipe 
                    name="Bolo de Cenoura"
                    picture="data:image/jpeg;base64,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"
                    time=" 40 min"
                    servings=" 8 porções"
                >
                   <h2>Ingredientes</h2>

                    <h3>Massa</h3>

                    <ul>
                        <li>1/2 xícara (chá) de óleo</li>
                        <li>3 cenouras médias raladas</li>
                        <li>4 ovos</li>
                        <li>2 xícaras (chá) de açúcar</li>
                        <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
                        <li>1 colher (sopa) de fermento em pó</li>

                    </ul>

                    <h3>Cobertura</h3>

                    <ul>
                        <li>1 colher (sopa) de manteiga</li>
                        <li>3 colheres (sopa) de chocolate em pó</li>
                        <li>1 xícara (chá) de açúcar</li>
                        <li>1 xícara (chá) de leite</li>

                    </ul>

                    <h2>Modo de Preparo</h2>

                    <h3>Massa</h3>

                    <ol>
                        <li>Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.</li>
                        <li>Acrescente o açúcar e bata novamente por 5 minutos.</li>
                        <li>Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.</li>
                        <li>Acrescente o fermento e misture lentamente com uma colher.</li>
                        <li>Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.</li>
                    </ol>

                    <h3>Cobertura</h3>

                    <ol>
                        <li>Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.</li>
                        <li>Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.</li>
                    </ol>

                 </Recipe>

            </div>
        )

}