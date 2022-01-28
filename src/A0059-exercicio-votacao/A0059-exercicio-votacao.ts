type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOption: VotationOption[] = [];
  constructor(public details: string) {}

  addVatationOption(votationOption: VotationOption): void {
    this._votationOption.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOption[votationIndex]) return;
    this._votationOption[votationIndex].numberOfVotes += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOption;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOp of votation.votationOption) {
        console.log(votationOp.option, votationOp.numberOfVotes);
      }
      console.log('#############');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVatationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVatationOption({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVatationOption({ option: 'TypeScript', numberOfVotes: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
