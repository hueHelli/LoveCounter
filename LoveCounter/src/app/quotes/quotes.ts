import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.css',
})
export class Quotes {
  loveQuotes: Array<{ content: string; author: string }> = [
    {
      content:
        'My bounty is as boundless as the sea, My love as deep; the more I give to thee, The more I have, for both are infinite.',
      author: 'William Shakespeare',
    },
    {
      content:
        'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.',
      author: 'A. A. Milne',
    },
    {
      content:
        'You must allow me to tell you how ardently I admire and love you.',
      author: 'Mr. Darcy (Jane Austen)',
    },
    {
      content:
        'The regret of my life is that I have not said ‘I love you’ often enough.',
      author: 'Yoko Ono',
    },
    { content: 'Love is the whole thing. We are only pieces.', author: 'Rumi' },
    {
      content:
        'One word frees us of all the weight and pain in life. That word is love!',
      author: 'Sophocles',
    },
    {
      content: 'Unable are the loved to die, for love is immortality.',
      author: 'Emily Dickinson',
    },
    {
      content:
        'The supreme happiness of life consists in the conviction that one is loved…',
      author: 'Victor Hugo',
    },
    { content: 'Where there is love there is life.', author: 'Mahatma Gandhi' },
    {
      content:
        'Love is the only force capable of transforming an enemy into a friend.',
      author: 'Martin Luther King, Jr.',
    },
    {
      content: 'True love stories never have endings.',
      author: 'Richard Bach',
    },
    {
      content:
        'Love never claims, it ever gives. Love never suffers, never resents, never revenges itself.',
      author: 'Mahatma Gandhi',
    },
    {
      content:
        'True love is inexhaustible. The more you give, the more you have.',
      author: 'Antoine de Saint‑Exupéry',
    },
    {
      content:
        'What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.',
      author: 'Helen Keller',
    },
    {
      content:
        'Death cannot stop true love. All it can do is delay it for a while.',
      author: 'William Goldman',
    },

    {
      content:
        'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
      author: 'Lao Tzu',
    },
    {
      content: 'To love someone is to see a miracle invisible to others.',
      author: 'François Mauriac',
    },
    {
      content:
        'Love is something eternal, the aspect may change, but not the essence.',
      author: 'Vincent Van Gogh',
    },
    {
      content:
        "When you love someone, you love the person as they are, and not as you'd like them to be.",
      author: 'Leo Tolstoy',
    },
    {
      content:
        "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
      author: 'Jodi Picoult',
    },
    {
      content:
        "If I had to choose between breathing or loving you, I would say 'I love you' with my last breath.",
      author: 'Shannon Dermott',
    },
    {
      content:
        'Two souls with but a single thought, two hearts that beat as one.',
      author: 'John Keats',
    },
    {
      content: 'You make me happy in a way no one else can.',
      author: 'Contentment Questing',
    },
    {
      content:
        'Because of you, I laugh a little harder, cry a little less, and smile a lot more.',
      author: 'Contentment Questing',
    },
    {
      content:
        'One day, I caught myself smiling without no reason, then I realized I was thinking of you.',
      author: 'Contentment Questing',
    },
    {
      content:
        'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.',
      author: 'Jessica Katoff',
    },
    {
      content:
        'My heart belongs to you and yours mine. There is no earthly possession that can match the preciousness of two joined hearts.',
      author: 'Contentment Questing',
    },
    {
      content: 'In a sea of people, my eyes will always search for you.',
      author: 'Contentment Questing',
    },
    {
      content:
        'If I can only say three words to you with my last breath, I will say – I love you.',
      author: 'Contentment Questing',
    },
    {
      content: "Because of you, I smile even when I don't want to.",
      author: 'Contentment Questing',
    },
    {
      content: 'You’re kinda, sorta, basically, pretty much always on my mind.',
      author: 'Contentment Questing',
    },
    {
      content: 'I turned out liking you a lot more than I originally planned.',
      author: 'Contentment Questing',
    },

    {
      content:
        'I fell in love like you would fall asleep: slowly and then all at once.',
      author: 'John Green',
    },
    {
      content: 'Love is composed of a single soul inhabiting two bodies.',
      author: 'Aristotle',
    },
    {
      content:
        "It's better to have loved and lost than never to have loved at all.",
      author: 'Alfred Lord Tennyson',
    },
    {
      content: 'There is no remedy for love, but to love more.',
      author: 'Henry David Thoreau',
    },
    {
      content: 'At the touch of love everyone becomes a poet.',
      author: 'Plato',
    },
    {
      content: 'In dreams and in love there are no impossibilities.',
      author: 'Janos Arany',
    },
    {
      content:
        'Love is a canvas furnished by nature and embroidered by imagination.',
      author: 'Voltaire',
    },
    {
      content: 'The love we give away is the only love we keep.',
      author: 'Elbert Hubbard',
    },
    { content: 'You call it madness, but I call it love.', author: 'Don Byas' },
    {
      content: 'Life is the flower for which love is the honey.',
      author: 'Victor Hugo',
    },
    { content: 'We can only learn to love by loving.', author: 'Iris Murdoch' },
    { content: 'All you need is love.', author: 'Paul McCartney' },

    {
      content: 'Love is shown more in deeds than in words.',
      author: 'Saint Ignatius',
    },
    {
      content: 'A life lived in love will never be dull.',
      author: 'Leo Buscaglia',
    },
    {
      content: 'Love all, trust a few, do wrong to none.',
      author: 'William Shakespeare',
    },
    {
      content: 'You are my favorite notification.',
      author: 'Contentment Questing',
    },
    {
      content: 'Where you are is where I want to be.',
      author: 'Contentment Questing',
    },
    {
      content: 'Some guys are worth losing sleep over.',
      author: 'Contentment Questing',
    },
    {
      content: "It doesn't matter where I am. I'm yours.",
      author: 'Contentment Questing',
    },
    {
      content: 'I like the way you make me feel even when I’m nowhere near.',
      author: 'Contentment Questing',
    },
    {
      content:
        'I hate waiting. But if waiting means being able to be with you, I’ll wait for as long as forever to be with you.',
      author: 'Contentment Questing',
    },
    {
      content:
        'It’s true. We don’t have it as easy as ordinary couples. But this is no ordinary love.',
      author: 'Contentment Questing',
    },
  ];

  selectedQuote?: { content: string; author: string };

  generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.loveQuotes.length);
    this.selectedQuote = this.loveQuotes[randomIndex];
  }

  ngOnInit() {
    this.generateRandomQuote();
  }
}
