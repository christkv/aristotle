# English grammar and vocabulary: original teaching fixture

This small original fixture demonstrates module authoring. It is not a textbook, comprehensive grammar rulebook or assignment to either child. The target is standard written English for these particular tasks.

<a id="agreement"></a>
## Agreement rule

In the supplied declarative sentences, the present-tense form of be agrees with the grammatical subject: singular takes is; plural takes are. A noun inside an intervening prepositional phrase does not determine this agreement. For example, in "The box of pencils is on the desk", the head of the subject is box, not pencils.

<a id="sentence-bank"></a>
## Reviewed sentence bank

Use exactly these subject entries and either predicate p-desk (on the desk) or p-window (near the window). Every combination is an allowed constructed sentence; there are 12 combinations. Format as "<subject> ___ <predicate>." Do not add other phrases at runtime.

| Subject ID | Subject text | Head | Number | Accepted form |
| --- | --- | --- | --- | --- |
| s-box | The box of pencils | box | singular | is |
| s-boxes | The boxes of pencils | boxes | plural | are |
| s-key | The key beside the books | key | singular | is |
| s-keys | The keys beside the book | keys | plural | are |
| s-lamp | The lamp | lamp | singular | is |
| s-lamps | The lamps | lamps | plural | are |

The JSON-string response contains only the missing word. Trim surrounding whitespace and fold ASCII case. is/are are the complete supported response set; the other member is incorrect. Other words, whole sentences, punctuation or empty input are unassessed with a request for the required response format. The agreement criterion is worth one mark. Exclude collective nouns, contractions, questions, coordinated subjects and dialect comparisons.

<a id="word-senses"></a>
## Reviewed word senses and contexts

Teach the three-word study list (mass, volume, density) before practice. Each question explicitly says: "Recall the matching term from your three-word study list." Then show one of the two prompts for the selected sense. Hide the word list during independent recall; revealing it counts as help. These are supplied definitions and constructed contexts, not measured observations.

| Sense ID | Lemma | Part of speech | Definition prompt (context d) | Context prompt (context c) |
| --- | --- | --- | --- | --- |
| mass.quantity | mass | noun | Which term names the quantity expressed in grams in this study list? | A sample is recorded as 60 g. Which listed quantity has been recorded? |
| volume.space | volume | noun | Which term names the space occupied by a sample? | A sample occupies 20 cm³. Which listed quantity is 20 cm³? |
| density.ratio | density | noun | Which term names mass divided by volume? | A sample's mass is divided by its volume. Which listed quantity is calculated? |

There are six sense/context pairs. Response is a JSON string containing the listed term; trim whitespace and fold ASCII case. A different listed term is incorrect; any other word, an empty string or a sentence is unassessed for this bounded list task. One recall-term criterion is worth one mark. Do not use this strict word-list checker for an unrestricted definition question. Spelling, productive use and general scientific understanding are separate objectives.

<a id="teaching"></a>
## Teaching and follow-up

In learn mode, explain the agreement rule and reveal the head noun on request. For vocabulary, show the selected sense, both reviewed prompts and a contextual explanation. Record this as help; do not silently turn it into independent evidence. A subsequent practice item uses a held-back sentence or context where available; once all variants have been seen, label reuse. This tiny bank demonstrates recall practice, not broad transfer or vocabulary mastery.

New words for vocabulary expansion require their own sourced senses and reviewed prompts. They do not automatically enter an exam's approved list. Voice can support a confirmed lexical response, but its transcript does not establish spelling ability.
