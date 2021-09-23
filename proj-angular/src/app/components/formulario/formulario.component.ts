import { Component } from "@angular/core";

@Component({
    selector: "formulario-cadastro",
    templateUrl: "./formulario.component.html",
    styleUrls: ["./formulario.component.css"]
})

export class FormularioComponent {
    nome = "";
    endereco = "";
    cidade = "";
    bairro = "";
    cep = "";
    telefone = "";
    inputProcurar = "";

    auxiliar_procurar = true;

    readOnlyNome = true;
    readOnlyEndereco = true;
    readOnlyCidade = true;
    readOnlyBairro = true;
    readOnlyCep = true;
    readOnlyTelefone = true;

    hiddenBtnNovo = false;
    hiddenBtnAlterar = false;
    hiddenBtnExcluir = false;
    hiddenBtnProcurar = false;
    hiddenBtnGravar = true;
    hiddenBtnCancelar = true;
    hiddenBtnCerteza = true;
    hiddenInputProcurar = true;

    novo() {
        this.habilitarDesabilitarTodosOsCampos(false);
        this.hiddenBtnNovo = true;
        this.hiddenBtnAlterar = true;
        this.hiddenBtnExcluir = true;
        this.hiddenBtnProcurar = true;
        this.hiddenBtnCerteza = true;
        this.hiddenBtnGravar = false;
        this.hiddenBtnCancelar = false;
        this.hiddenInputProcurar = true;
    }

    alterar() {
        this.habilitarDesabilitarTodosOsCampos(false);
        this.hiddenBtnNovo = true;
        this.hiddenBtnAlterar = true;
        this.hiddenBtnExcluir = true;
        this.hiddenBtnProcurar = true;
        this.hiddenBtnCerteza = true;
        this.hiddenBtnGravar = false;
        this.hiddenBtnCancelar = false;
        this.hiddenInputProcurar = true;
    }

    excluir() {
        this.habilitarDesabilitarTodosOsCampos(true);
        this.hiddenBtnNovo = true;
        this.hiddenBtnAlterar = true;
        this.hiddenBtnExcluir = true;
        this.hiddenBtnProcurar = true;
        this.hiddenBtnCerteza = false;
        this.hiddenBtnGravar = true;
        this.hiddenBtnCancelar = false;
        this.hiddenInputProcurar = true;
    }

    procurar() {
        if (this.auxiliar_procurar == false) {
            this.auxiliar_procurar = true;
            this.hiddenBtnProcurar = false;
            this.hiddenInputProcurar = true;

            this.hiddenBtnNovo = false;
            this.hiddenBtnAlterar = false;
            this.hiddenBtnExcluir = false;
            this.hiddenBtnCerteza = true;
            this.hiddenBtnGravar = true;
            this.hiddenBtnCancelar = true;
        } else {
            this.hiddenInputProcurar = false;
            this.hiddenBtnNovo = true;
            this.hiddenBtnProcurar = false;
            this.inputProcurar = "";

            this.hiddenBtnAlterar = true;
            this.hiddenBtnExcluir = true;
            this.hiddenBtnCerteza = true;
            this.hiddenBtnGravar = true;
            this.hiddenBtnCancelar = true;

            this.auxiliar_procurar = false;
        }

    }

    gravar() {
        this.habilitarDesabilitarTodosOsCampos(true);
        this.limparTodosAsPropriedades();
        this.hiddenBtnNovo = false;
        this.hiddenBtnAlterar = false;
        this.hiddenBtnExcluir = false;
        this.hiddenBtnProcurar = false;
        this.hiddenBtnGravar = true;
        this.hiddenBtnCancelar = true;
        this.hiddenBtnCerteza = true;
        this.hiddenInputProcurar = true;
    }

    cancelar() {
        this.habilitarDesabilitarTodosOsCampos(true);
        this.limparTodosAsPropriedades();
        this.hiddenBtnNovo = false;
        this.hiddenBtnAlterar = false;
        this.hiddenBtnExcluir = false;
        this.hiddenBtnProcurar = false;
        this.hiddenBtnGravar = true;
        this.hiddenBtnCancelar = true;
        this.hiddenBtnCerteza = true;
        this.hiddenInputProcurar = true;
    }

    limparTodosAsPropriedades() {
        this.nome = "";
        this.bairro = "";
        this.endereco = "";
        this.cidade = "";
        this.bairro = "";
        this.cep = "";
        this.telefone = "";
    }

    habilitarDesabilitarTodosOsCampos(valor: boolean) {
        this.readOnlyNome = valor;
        this.readOnlyEndereco = valor;
        this.readOnlyCidade = valor;
        this.readOnlyBairro = valor;
        this.readOnlyCep = valor;
        this.readOnlyTelefone = valor;
    }
}