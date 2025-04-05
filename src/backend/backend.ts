import { ref } from "vue";
import { useRouter } from "vue-router";

type User = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    confirmTerms: boolean
}

// Lista que serve como banco de dados fictício para os usuários
const listUser = ref<User[]>([])

// Hook: serve para cadastrar usuários na lista e trocar a rota de navegação após o cadastro
export function useRegisterUser() {
    const router = useRouter()

    // Função para cadastrar usuários na lista
    const registerUser = (nameUser: string, email: string, password: string, confirmPassword: string, confirmTerms: boolean) => {
        if (verifyConditions(nameUser, email, password, confirmPassword, confirmTerms)) {
            listUser.value.push({
                name: nameUser,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                confirmTerms: confirmTerms
            })
            // Retorna a chamada da função para trocar de rota, caso o cadastro seja feito com sucesso
            return updateRouter()
        }
    }
    
    // Função para atualizar a rota de navegação, caso o cadastro seja feito com sucesso
    const updateRouter = async () => {
        try {
            // Espera 5 segundos antes de trocar a rota
            await new Promise(resolve => setTimeout(resolve, 500)) 
            // Retorna a tela de login da aplicação
            router.push('/')
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    // Função para verificar as condições propostas pela aplicação
    const verifyConditions = (name: string, email: string, password: string, confirmPassword: string, confirmTerms: boolean) => {
        // Verifica se nenhum campo está vazio
        if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
            // Verifica se a confirmação de senha é igual a senha informada acima
            if (confirmPassword === password) {
                // Verifica se o usuário concordou com os termos de segurança
                if (confirmTerms) {
                    // Retorna true, se as condições forem atentidas corretamente
                    return true
                } else {
                    console.log('ERRO: É necessário concordar com os termos de segurança.')
                }
            } else {
                console.log('ERRO: Informe a mesma senha que foi passada no campo acima.')
            }
        } else {
            console.log('ERRO: Algum campo está vazio.')
        }
        // Retorna false, se alguma condição não for atendida corretamente
        return false
    }

    // Retorna a função de cadastro do usuário
    return { registerUser }
}

// Hook: serve para verificar as informações de login e trocar a rota de navegação após o login
export function useLoginUser() {
    const router = useRouter()

    // Função para buscar nome de usuário (ou e-mail) e senha na lista, para fazer login
    const getUser = (login: string, password: string) => {
        listUser.value.forEach((res) => {
            // Verifica se o login (nome de usuário ou e-mail) e a senha são iguais aos cadastrados na lista
            if ((login === res.email || login === res.name) && (password === res.password)) {
                console.log('OK')
                // Se os dados forem iguais, redireciona o usuário para a tela do dashboard
                return updateRouter()
            } else {
                console.log('Nome de usuário/e-mail ou senha não encontrados.')
            }
        })
    }

    // Função para atualizar a rota de navegação, caso o login seja feito com sucesso
    const updateRouter = async () => {
        try {
            // Espera 5 segundos antes de trocar a rota
            await new Promise(resolve => setTimeout(resolve, 500)) 
            // Retorna a tela de dashboard da aplicação
            router.push('/dashboard')
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    return { getUser }
}