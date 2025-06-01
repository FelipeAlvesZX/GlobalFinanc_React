import Produto from "./Produto"
import styleLista  from "./ListaProduto.css"
function ListaProduto(){
   return(
     <div>
        <hr />
        <h2 className={styleLista.titulo}>Lista de Produtos</h2>
        <Produto
          imagem="https://super.abril.com.br/wp-content/uploads/2018/07/52d0469d865be2752d0003c4640px-caneta-tinteiro.jpeg" 
          alternativa="Caneta Antiga"
          nome="Caneta Tinteiro"
          tamanho="Único"
          quant="3"
        />
        <Produto
          imagem="https://png.pngtree.com/background/20230327/original/pngtree-cold-glass-of-beer-vector-picture-image_2177300.jpg" 
          alternativa="Copo para cerveja/chopp"
          nome="Copo para chopp/cerveja"
          tamanho="300 ml"
          quant="23"
        />
     </div>

   );
}

export default ListaProduto;