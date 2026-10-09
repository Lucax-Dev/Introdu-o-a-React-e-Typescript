export interface TipoEvento {
    idTipoEvento: string;
    titulo: string;
}

export interface Instituicao {
    idInstituicao: string;
    cnpj: string;
    nomeFantasia: string;
    endereco: string;
}

export interface Evento {
    idEvento: string;
    nome: string;
    descricao: string;
    dataEvento: string;
    imagemUrl?: string | null;
    idTipoEvento?: string | null;
    idTipoEventoNavigation?: TipoEvento | null;
    idInstituicao?: string | null;
    idInstituicaoNavigation?: Instituicao | null;
}