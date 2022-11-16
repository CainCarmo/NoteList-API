import mongoose from "mongoose"

class ConfigDB
{
    constructor()
    {
        this.Connect()
    }

    private async Connect(): Promise<void>
    {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}`
                .concat("@caincarmo.ixivr23.mongodb.net/")
                .concat("notelist?retryWrites=true&w=majority"),
            (error) => {
                error
                    ? console.log("Erro ao tentar conectar-se ao Banco de Dados!")
                    : console.log("Conexão com o Banco de Dados feita com sucesso!")
            }
        )
    }
}

export default ConfigDB