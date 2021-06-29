
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import RecipeCard from '../components/RecipeCard/RecipeCard';


export default function Index(){
  return (
    <div>
      <Header title="TreinaCook" />
  

        <main>
          <RecipeCard
            name="Brigadeiro"
            category="Doces"
            picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
            link="/receitas/doces/brigadeiro"
          />
           <RecipeCard
            name="Bolo de Cenoura"
            category="Bolo"
            picture="data:image/jpeg;base64,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"
            link="/receitas/bolos/bolo-de-cenoura"
          />
           <RecipeCard
          name="Maça do Amor"
          category="Doces"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/090/499/354791/354791_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/doces/maca-do-amor"
        />
         <RecipeCard
            name="Torta de Frango"
            category="Salgados"
            picture="data:image/jpeg;base64,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"
            link="/receitas/salgado/torta-de-frango"
          />
       
        </main>

      <Footer />
    </div>
  )
}