import type { Question, StudyTopic, UserPerformance, QuestionCategory } from '@/lib/types';

export const mockQuestions: Question[] = [
  // Rights and Responsibilities
  {
    id: 1,
    question: 'What are the two official languages of Canada?',
    options: ['English and French', 'English and Spanish', 'English and Mandarin', 'French and Inuktitut'],
    answer: 'English and French',
    category: 'Symbols',
    explanation: 'Canada has two official languages: English and French. All federal government services must be available in both languages.',
  },
  {
    id: 2,
    question: 'Who is Canada\'s Head of State?',
    options: ['The Prime Minister', 'The Governor General', 'The reigning Sovereign of the United Kingdom', 'The President'],
    answer: 'The reigning Sovereign of the United Kingdom',
    category: 'Government',
    explanation: 'As a constitutional monarchy, Canada’s Head of State is a hereditary Sovereign (Queen or King) who reigns in accordance with the Constitution.',
  },
  {
    id: 3,
    question: 'What is the highest honour that Canadians can receive?',
    options: ['The Order of Canada', 'The Victoria Cross', 'The Medal of Bravery', 'A Nobel Prize'],
    answer: 'The Victoria Cross',
    category: 'Symbols',
    explanation: 'The Victoria Cross is the highest military decoration awarded for valour "in the face of the enemy" to members of the armed forces of Commonwealth countries.',
  },
  {
    id: 4,
    question: 'In what year did Canada become a country?',
    options: ['1867', '1776', '1901', '1812'],
    answer: '1867',
    category: 'History',
    explanation: 'On July 1, 1867, the provinces of Canada, Nova Scotia, and New Brunswick were united into a federal state, the Dominion of Canada.',
  },
  {
    id: 5,
    question: 'Which of the following is a responsibility of Canadian citizenship?',
    options: ['To own a house', 'To vote in elections', 'To learn both official languages', 'To travel abroad'],
    answer: 'To vote in elections',
    category: 'Rights and Responsibilities',
    explanation: 'Voting in federal, provincial or territorial, and local elections is a key responsibility of every Canadian citizen.',
  },
  {
    id: 6,
    question: 'What ocean borders Canada to the west?',
    options: ['Atlantic Ocean', 'Arctic Ocean', 'Pacific Ocean', 'Indian Ocean'],
    answer: 'Pacific Ocean',
    category: 'Geography',
    explanation: 'The Pacific Ocean borders Canada to the west, the Atlantic Ocean to the east, and the Arctic Ocean to the north.',
  },
  {
    id: 7,
    question: 'What do the three levels of government in Canada have in common?',
    options: ['They are all led by the Prime Minister', 'They all pass laws, have an elected body, and a leader', 'They are all based in Ottawa', 'They all have the same number of members'],
    answer: 'They all pass laws, have an elected body, and a leader',
    category: 'Government',
    explanation: 'The federal, provincial/territorial, and municipal governments each have specific powers and responsibilities, but they share a similar structure of passing laws, having an elected body (like Parliament or a city council), and a leader (like a Prime Minister or Mayor).',
  },
  {
    id: 8,
    question: 'Who were the United Empire Loyalists?',
    options: ['Settlers from France', 'The first Aboriginal people in Canada', 'People who remained loyal to the British Crown during the American Revolution', 'The founders of the Hudson\'s Bay Company'],
    answer: 'People who remained loyal to the British Crown during the American Revolution',
    category: 'History',
    explanation: 'The United Empire Loyalists were American colonists who remained loyal to the British Crown and fled to British North America during and after the American Revolutionary War.',
  },
  {
    id: 9,
    question: "What is the name of the Royal Anthem of Canada?",
    options: ["O Canada", "God Save the Queen (or King)", "The Maple Leaf Forever", "Star-Spangled Banner"],
    answer: "God Save the Queen (or King)",
    category: "Symbols",
    explanation: "'God Save the Queen (or King)' is the Royal Anthem of Canada. 'O Canada' is the national anthem."
  },
  {
    id: 10,
    question: "Which province is the only officially bilingual province?",
    options: ["Quebec", "Ontario", "New Brunswick", "Manitoba"],
    answer: "New Brunswick",
    category: "Geography",
    explanation: "New Brunswick is the only province that is constitutionally bilingual (English and French)."
  },
  {
    id: 11,
    question: "What are the three main groups of Aboriginal peoples in Canada?",
    options: ["First Nations, Métis, and Inuit", "Acadians, Métis, and Inuit", "First Nations, Acadians, and Loyalists", "Inuit, Métis, and Settlers"],
    answer: "First Nations, Métis, and Inuit",
    category: "History",
    explanation: "The Canadian Constitution recognizes three main groups of Aboriginal peoples: First Nations (sometimes called Indians), Métis, and Inuit."
  },
  {
    id: 12,
    question: "On what date is Canada Day celebrated?",
    options: ["July 1st", "May 24th", "June 24th", "December 26th"],
    answer: "July 1st",
    category: "History",
    explanation: "Canada Day is celebrated on July 1st, the anniversary of Confederation in 1867."
  },
  {
    id: 13,
    question: "In which year was the Canadian Charter of Rights and Freedoms added to the Constitution?",
    options: ["1982", "1867", "1960", "2000"],
    answer: "1982",
    category: "Rights and Responsibilities",
    explanation: "The Canadian Charter of Rights and Freedoms was added to the Constitution in 1982 by Prime Minister Pierre Elliott Trudeau."
  },
  {
    id: 14,
    question: "What is a 'riding' or 'constituency' in Canadian politics?",
    options: ["A political party", "A geographical area represented by a Member of Parliament", "A government department", "A type of tax"],
    answer: "A geographical area represented by a Member of Parliament",
    category: "Government",
    explanation: "A riding, also known as a constituency or electoral district, is a geographical area represented by an elected Member of Parliament (MP)."
  },
  {
    id: 15,
    question: "Which animal is an official symbol of Canada?",
    options: ["The Beaver", "The Moose", "The Canada Goose", "The Polar Bear"],
    answer: "The Beaver",
    category: "Symbols",
    explanation: "The beaver was adopted as an official symbol of Canada in 1975. It represents the fur trade, which was a major economic driver in early Canadian history."
  },
  {
    id: 16,
    question: "What are the three territories of Canada?",
    options: ["Yukon, Northwest Territories, and Nunavut", "Yukon, Alberta, and Nunavut", "Northwest Territories, British Columbia, and Yukon", "Nunavut, Alaska, and Yukon"],
    answer: "Yukon, Northwest Territories, and Nunavut",
    category: "Geography",
    explanation: "Canada has three territories in the north: Yukon, Northwest Territories, and Nunavut."
  },
  {
    id: 17,
    question: "Who has the right to vote in federal elections?",
    options: ["Any resident of Canada", "A Canadian citizen, at least 18 years old, on the voters' list", "Landowners only", "Members of the military only"],
    answer: "A Canadian citizen, at least 18 years old, on the voters' list",
    category: "Rights and Responsibilities",
    explanation: "To vote in a federal election, you must be a Canadian citizen, be at least 18 years old on election day, and be on the voters' list."
  },
  {
    id: 18,
    question: "Which two European powers fought for control of North America in the 1700s?",
    options: ["Britain and France", "Spain and Portugal", "Britain and Spain", "France and Germany"],
    answer: "Britain and France",
    category: "History",
    explanation: "Throughout the 1700s, Britain and France were the main European powers competing for control of territory in North America, culminating in the Seven Years' War."
  },
  {
    id: 19,
    question: "What is the role of the opposition parties in Parliament?",
    options: ["To agree with everything the government says", "To peacefully oppose or try to improve government proposals", "To run the government", "To appoint judges"],
    answer: "To peacefully oppose or try to improve government proposals",
    category: "Government",
    explanation: "The role of opposition parties is to oppose the government's decisions, hold it accountable, and offer different proposals for consideration."
  },
  {
    id: 20,
    question: "What does the Canadian flag look like?",
    options: ["Red and white with a beaver", "Red and white with a red maple leaf", "Blue and white with a star", "Green and white with a wheat sheaf"],
    answer: "Red and white with a red maple leaf",
    category: "Symbols",
    explanation: "The Canadian national flag is white with a red square on each end and a single red maple leaf in the centre."
  },
  {
    id: 21,
    question: "Which province is Canada's largest producer of oil and gas?",
    options: ["Alberta", "Ontario", "Quebec", "British Columbia"],
    answer: "Alberta",
    category: "Geography",
    explanation: "Alberta is home to vast oil sands and is the largest producer of crude oil and natural gas in Canada."
  },
  {
    id: 22,
    question: "What is meant by the 'rule of law'?",
    options: ["The law only applies to citizens, not the government", "The law is made by the Queen", "Everyone is subject to the law, including rulers and governments", "The law can be changed by the police"],
    answer: "Everyone is subject to the law, including rulers and governments",
    category: "Rights and Responsibilities",
    explanation: "The rule of law is a fundamental principle that means everyone, including the government, police, and judges, must obey the law. No one is above the law."
  },
  {
    id: 23,
    question: "Who were the Fathers of Confederation?",
    options: ["The first hockey team", "The representatives who created the Dominion of Canada", "The leaders of the Aboriginal peoples", "The first European explorers"],
    answer: "The representatives who created the Dominion of Canada",
    category: "History",
    explanation: "The Fathers of Confederation were the political leaders and representatives who attended the Charlottetown and Quebec conferences in 1864 and worked to establish the Dominion of Canada in 1867."
  },
  {
    id: 24,
    question: "What are the three branches of government?",
    options: ["Legislative, Executive, and Judicial", "Federal, Provincial, and Municipal", "Police, Military, and Government", "Crown, Senate, and House of Commons"],
    answer: "Legislative, Executive, and Judicial",
    category: "Government",
    explanation: "The three branches of government are the Legislative (makes laws), Executive (implements and enforces laws), and Judicial (interprets laws)."
  },
  {
    id: 25,
    question: "What is the name of the Canadian national anthem?",
    options: ["God Save the Queen", "The Star-Spangled Banner", "La Marseillaise", "O Canada"],
    answer: "O Canada",
    category: "Symbols",
    explanation: "O Canada was proclaimed the national anthem in 1980."
  },
  {
    id: 26,
    question: "Which is the largest Canadian province by area?",
    options: ["Ontario", "British Columbia", "Quebec", "Alberta"],
    answer: "Quebec",
    category: "Geography",
    explanation: "Quebec is the largest province by land area, while Nunavut is the largest territory."
  },
  {
    id: 27,
    question: "Where do most French-speaking Canadians live?",
    options: ["Ontario", "Quebec", "New Brunswick", "Manitoba"],
    answer: "Quebec",
    category: "Geography",
    explanation: "The vast majority of French-speaking Canadians (francophones) live in the province of Quebec."
  },
  {
    id: 28,
    question: "What document made Canada a fully independent country?",
    options: ["The British North America Act", "The Constitution Act, 1982", "The Statute of Westminster", "The Quebec Act"],
    answer: "The Constitution Act, 1982",
    category: "History",
    explanation: "The Constitution Act, 1982, patriated the Canadian Constitution, including the Charter of Rights and Freedoms, ending the British Parliament's power to amend it. This act made Canada a fully independent nation."
  },
  {
    id: 29,
    question: "Who is the head of government in Canada?",
    options: ["The Queen", "The Governor General", "The Prime Minister", "The Speaker of the House"],
    answer: "The Prime Minister",
    category: "Government",
    explanation: "The Prime Minister is the head of government, responsible for leading the party in power and the country."
  },
  {
    id: 30,
    question: "What is the significance of the poppy?",
    options: ["It signifies the end of summer", "It is a symbol of remembrance for soldiers who have died in war", "It is the national flower of Canada", "It represents peace and neutrality"],
    answer: "It is a symbol of remembrance for soldiers who have died in war",
    category: "Symbols",
    explanation: "The red poppy is worn on Remembrance Day (November 11th) to honour Canadians who have served and died for their country in wars."
  },
  {
    id: 31,
    question: "Which province is known as 'Canada's Breadbasket'?",
    options: ["Manitoba", "Saskatchewan", "Alberta", "Ontario"],
    answer: "Saskatchewan",
    category: "Geography",
    explanation: "Saskatchewan is a major agricultural province, known for its vast wheat fields, earning it the nickname 'Canada's Breadbasket'."
  },
  {
    id: 32,
    question: "What is a 'secret ballot'?",
    options: ["A vote held in secret", "A vote that only the Prime Minister can see", "A system where no one can know how you voted", "A vote on a secret law"],
    answer: "A system where no one can know how you voted",
    category: "Rights and Responsibilities",
    explanation: "A secret ballot is a core principle of Canadian democracy, ensuring that each citizen can cast their vote in private without fear or intimidation."
  },
  {
    id: 33,
    question: "What was the 'Underground Railroad'?",
    options: ["Canada's first subway system", "A secret network that helped slaves escape to Canada", "A trade route for furs", "A railway built by miners"],
    answer: "A secret network that helped slaves escape to Canada",
    category: "History",
    explanation: "The Underground Railroad was an anti-slavery network of secret routes and safe houses used by enslaved African Americans to escape into free states and Canada."
  },
  {
    id: 34,
    question: "How are Members of Parliament (MPs) chosen?",
    options: ["They are appointed by the Prime Minister", "They are elected by Canadian citizens in their riding", "They are chosen by the Queen", "They inherit their position"],
    answer: "They are elected by Canadian citizens in their riding",
    category: "Government",
    explanation: "Members of Parliament are chosen in federal elections. Voters in each electoral district, or riding, elect one MP to represent them in the House of Commons."
  },
  {
    id: 35,
    question: "What does 'Habeas Corpus' mean?",
    options: ["The right to vote", "The right to a fair trial", "The right to not be imprisoned without a lawful reason", "The right to free speech"],
    answer: "The right to not be imprisoned without a lawful reason",
    category: "Rights and Responsibilities",
    explanation: "Habeas corpus is the right to challenge unlawful detention by the state. It requires a person under arrest to be brought before a judge or into court."
  },
  {
    id: 36,
    question: "Which Canadian city is the largest?",
    options: ["Vancouver", "Montreal", "Toronto", "Calgary"],
    answer: "Toronto",
    category: "Geography",
    explanation: "Toronto, the capital of Ontario, is the most populous city in Canada."
  },
  {
    id: 37,
    question: "What is the name of the Governor General's official residence in Ottawa?",
    options: ["24 Sussex Drive", "The Parliament Buildings", "Rideau Hall", "The Supreme Court"],
    answer: "Rideau Hall",
    category: "Government",
    explanation: "Rideau Hall has been the official residence and workplace of every governor general of Canada since 1867."
  },
  {
    id: 38,
    question: "Which battle in 1759 was a key turning point in the British conquest of New France?",
    options: ["The Battle of Vimy Ridge", "The Battle of the Plains of Abraham", "The Battle of 1812", "The Battle of the Atlantic"],
    answer: "The Battle of the Plains of Abraham",
    category: "History",
    explanation: "The British victory at the Battle of the Plains of Abraham near Quebec City in 1759 led to the fall of New France to the British."
  },
  {
    id: 39,
    question: "What part of the Constitution legally protects the basic rights and freedoms of all Canadians?",
    options: ["The British North America Act", "The Bill of Rights", "The Canadian Charter of Rights and Freedoms", "The Meech Lake Accord"],
    answer: "The Canadian Charter of Rights and Freedoms",
    category: "Rights and Responsibilities",
    explanation: "The Canadian Charter of Rights and Freedoms, entrenched in the Constitution in 1982, guarantees the fundamental rights and freedoms of Canadians."
  },
  {
    id: 40,
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
    category: "Geography",
    explanation: "Queen Victoria chose Ottawa as Canada's capital in 1857. It is located on the Ottawa River."
  },
  {
    id: 41,
    question: "Who appoints the Senators in Canada?",
    options: ["The Prime Minister", "They are elected by the public", "The Governor General on the advice of the Prime Minister", "The Queen"],
    answer: "The Governor General on the advice of the Prime Minister",
    category: "Government",
    explanation: "Senators, who serve in the Upper House of Parliament, are appointed by the Governor General based on the recommendation of the Prime Minister."
  },
  {
    id: 42,
    question: "What significant event happened on D-Day, June 6, 1944?",
    options: ["The end of World War II", "The invasion of Normandy by the Allies", "The bombing of Pearl Harbor", "The signing of the Treaty of Versailles"],
    answer: "The invasion of Normandy by the Allies",
    category: "History",
    explanation: "On D-Day, Canadian forces were part of the massive Allied invasion of Normandy, France, a key operation of World War II that led to the liberation of Europe."
  },
  {
    id: 43,
    question: "What are the first two lines of 'O Canada'?",
    options: ["O Canada! Our home and native land! / True patriot love in all of us command.", "O Canada! Our home on native land! / True patriot love in all thy sons command.", "O Canada! Our home and cherished land! / With glowing hearts we see thee rise.", "O Canada! From far and wide / We stand on guard for thee."],
    answer: "O Canada! Our home and native land! / True patriot love in all of us command.",
    category: "Symbols",
    explanation: "The first two lines of the national anthem are 'O Canada! Our home and native land! True patriot love in all of us command.' The lyrics were updated in 2018 to be gender-neutral."
  },
  {
    id: 44,
    question: "Which region of Canada is known for its large tides?",
    options: ["The West Coast", "The Atlantic Provinces", "The North", "The Prairies"],
    answer: "The Atlantic Provinces",
    category: "Geography",
    explanation: "The Bay of Fundy in the Atlantic region has the highest tides in the world."
  },
  {
    id: 45,
    question: "What is the role of the judiciary?",
    options: ["To make laws", "To enforce laws", "To interpret and apply the law", "To advise the Prime Minister"],
    answer: "To interpret and apply the law",
    category: "Government",
    explanation: "The judicial branch of government, which includes judges and courts, is responsible for interpreting and applying Canada's laws in an impartial manner."
  },
  {
    id: 46,
    question: "What is Remembrance Day for?",
    options: ["To celebrate Canada's birthday", "To honour veterans and those who died in wars", "To celebrate the first day of winter", "To vote in an election"],
    answer: "To honour veterans and those who died in wars",
    category: "History",
    explanation: "Remembrance Day is observed on November 11th to recall the end of World War I and to honour all who have served and died in the nation's service."
  },
  {
    id: 47,
    question: "What is the highest court in Canada?",
    options: ["The Federal Court", "The Provincial Court of Appeal", "The Supreme Court of Canada", "The Tax Court of Canada"],
    answer: "The Supreme Court of Canada",
    category: "Government",
    explanation: "The Supreme Court of Canada is the country's final court of appeal and has jurisdiction over all areas of the law."
  },
  {
    id: 48,
    question: "Which Canadian province is the most populous?",
    options: ["Quebec", "British Columbia", "Alberta", "Ontario"],
    answer: "Ontario",
    category: "Geography",
    explanation: "With over 14 million people, Ontario is the most populous province in Canada, home to more than one-third of Canadians."
  },
  {
    id: 49,
    question: "From whom did Canada get its name?",
    options: ["From the Inuit word for 'village'", "From the French explorer Jacques Cartier", "From the Spanish word for 'coast'", "From the name of a queen"],
    answer: "From the French explorer Jacques Cartier",
    category: "History",
    explanation: "The name 'Canada' comes from the Huron-Iroquois word 'kanata,' meaning 'village' or 'settlement.' Jacques Cartier misunderstood it as the name for the entire area."
  },
  {
    id: 50,
    question: "What are the three main types of industries in Canada's economy?",
    options: ["Service, Manufacturing, and Natural Resources", "Technology, Tourism, and Agriculture", "Fishing, Mining, and Forestry", "Banking, Healthcare, and Education"],
    answer: "Service, Manufacturing, and Natural Resources",
    category: "Geography",
    explanation: "Canada's economy is broadly divided into three sectors: service industries (like transportation and retail), manufacturing industries (like automobiles and food processing), and natural resource industries (like forestry and mining)."
  },
  {
    id: 51,
    question: "Who do Canadians vote for in a federal election?",
    options: ["The Prime Minister directly", "A candidate in their local electoral district", "The Governor General", "All of the above"],
    answer: "A candidate in their local electoral district",
    category: "Government",
    explanation: "In a federal election, Canadians vote for a candidate to represent their electoral district (riding) in the House of Commons."
  },
  {
    id: 52,
    question: "What right does the 'Freedom of Conscience and Religion' protect?",
    options: ["The right to express any opinion", "The right to believe or not believe in a religion", "The right to join any group", "The right to live anywhere in Canada"],
    answer: "The right to believe or not believe in a religion",
    category: "Rights and Responsibilities",
    explanation: "This fundamental freedom allows you to have your own religious and spiritual beliefs and to express them, or to have no religious beliefs at all."
  },
  {
    id: 53,
    question: "What was the 'Head Tax'?",
    options: ["A tax on hats", "A fee charged to Chinese immigrants entering Canada", "A property tax", "A tax on voting"],
    answer: "A fee charged to Chinese immigrants entering Canada",
    category: "History",
    explanation: "The Chinese Head Tax was a fixed fee charged to each Chinese person entering Canada. It was a discriminatory policy meant to discourage Chinese immigration."
  },
  {
    id: 54,
    question: "Which ocean borders Canada to the east?",
    options: ["Pacific Ocean", "Arctic Ocean", "Atlantic Ocean", "Southern Ocean"],
    answer: "Atlantic Ocean",
    category: "Geography",
    explanation: "The Atlantic Ocean forms Canada's eastern border."
  },
  {
    id: 55,
    question: "What is the name of the leader of the opposition in the House of Commons?",
    options: ["The Speaker", "The Prime Minister", "The Leader of the Official Opposition", "The Sergeant-at-Arms"],
    answer: "The Leader of the Official Opposition",
    category: "Government",
    explanation: "The leader of the party with the second-most seats in the House of Commons is known as the Leader of His Majesty's Loyal Opposition."
  },
  {
    id: 56,
    question: "What is a key feature of a constitutional monarchy?",
    options: ["The monarch has absolute power", "The monarch is only a figurehead", "The monarch's power is limited by the constitution", "There is no monarch"],
    answer: "The monarch's power is limited by the constitution",
    category: "Government",
    explanation: "In a constitutional monarchy like Canada, the Sovereign is the head of state, but their powers are defined and limited by the constitution and the laws of the country."
  },
  {
    id: 57,
    question: "What do we call a proposed law in Parliament?",
    options: ["A motion", "An order", "A bill", "A decree"],
    answer: "A bill",
    category: "Government",
    explanation: "A bill is a proposal for a new law, or a change to an existing law, that is presented for debate before Parliament."
  },
  {
    id: 58,
    question: "What important trade agreement exists between Canada, the United States, and Mexico?",
    options: ["NAFTA", "The TPP", "CUSMA (or USMCA)", "The European Union"],
    answer: "CUSMA (or USMCA)",
    category: "Geography",
    explanation: "The Canada-United States-Mexico Agreement (CUSMA), known as USMCA in the US, is the free trade agreement between the three countries, which replaced NAFTA."
  },
  {
    id: 59,
    question: "Who was Sir John A. Macdonald?",
    options: ["Canada's first Prime Minister", "An explorer", "The first Governor General", "A famous hockey player"],
    answer: "Canada's first Prime Minister",
    category: "History",
    explanation: "Sir John A. Macdonald was a Father of Confederation and Canada's first Prime Minister, serving from 1867 to 1873 and from 1878 to 1891."
  },
  {
    id: 60,
    question: "Serving on a jury is a civic...",
    options: ["Right", "Option", "Duty", "Privilege"],
    answer: "Duty",
    category: "Rights and Responsibilities",
    explanation: "When called upon, it is a citizen's legal duty to serve on a jury. This is a key part of the justice system."
  },
  {
    id: 61,
    question: "What are the Prairie provinces?",
    options: ["Ontario, Quebec, and Manitoba", "Manitoba, Saskatchewan, and Alberta", "British Columbia, Alberta, and Saskatchewan", "Yukon, Northwest Territories, and Nunavut"],
    answer: "Manitoba, Saskatchewan, and Alberta",
    category: "Geography",
    explanation: "The Prairie provinces are Manitoba, Saskatchewan, and Alberta, known for their plains and rich agriculture."
  },
  {
    id: 62,
    question: "What is the main role of a Member of Parliament (MP)?",
    options: ["To represent their constituents in the House of Commons", "To command the army", "To collect taxes", "To run a province"],
    answer: "To represent their constituents in the House of Commons",
    category: "Government",
    explanation: "The primary role of an MP is to represent the interests and concerns of the people living in their electoral district (riding) in Ottawa."
  },
  {
    id: 63,
    question: "What happened at the Battle of Vimy Ridge?",
    options: ["Canadian forces achieved a significant victory in World War I", "The Fathers of Confederation met", "The War of 1812 ended", "The Quebec Referendum was held"],
    answer: "Canadian forces achieved a significant victory in World War I",
    category: "History",
    explanation: "The Battle of Vimy Ridge in April 1917 was a defining moment for Canada. The Canadian Corps captured the heavily fortified ridge, a major military achievement that fostered a sense of national pride and identity."
  },
  {
    id: 64,
    question: "The 'Freedom of peaceful assembly' guarantees what?",
    options: ["The right to gather and protest peacefully", "The right to own weapons", "The right to a speedy trial", "The right to privacy"],
    answer: "The right to gather and protest peacefully",
    category: "Rights and Responsibilities",
    explanation: "This fundamental freedom, protected by the Charter, allows Canadians to gather for peaceful demonstrations and meetings."
  },
  {
    id: 65,
    question: "What is the name of the building where the House of Commons and the Senate meet?",
    options: ["The Supreme Court", "Rideau Hall", "The Parliament Buildings", "24 Sussex Drive"],
    answer: "The Parliament Buildings",
    category: "Government",
    explanation: "The Parliament Buildings, located on Parliament Hill in Ottawa, house the legislative branch of the federal government, including the House of Commons and the Senate chambers."
  },
  {
    id: 66,
    question: "Which province has the largest landmass?",
    options: ["Ontario", "British Columbia", "Quebec", "Nunavut"],
    answer: "Quebec",
    category: "Geography",
    explanation: "Of the provinces, Quebec has the largest land area. Nunavut is the largest territory and overall the largest administrative division in Canada."
  },
  {
    id: 67,
    question: "Who are the Acadians?",
    options: ["Descendants of French colonists who settled in the Maritime provinces", "Indigenous people of the West Coast", "English settlers in Ontario", "The first residents of Toronto"],
    answer: "Descendants of French colonists who settled in the Maritime provinces",
    category: "History",
    explanation: "The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604. They have a distinct history and culture."
  },
  {
    id: 68,
    question: "What is the purpose of the Official Opposition?",
    options: ["To support all government actions", "To form a coalition government", "To peacefully challenge and scrutinize the government", "To elect the Governor General"],
    answer: "To peacefully challenge and scrutinize the government",
    category: "Government",
    explanation: "The Official Opposition plays a crucial role in holding the government accountable for its actions and presenting alternative policies to the public."
  },
  {
    id: 69,
    question: "What does the term 'Métis' refer to?",
    options: ["The first settlers from Scotland", "A distinct Aboriginal people of mixed First Nations and European ancestry", "Inuit people living in cities", "French-speaking Canadians"],
    answer: "A distinct Aboriginal people of mixed First Nations and European ancestry",
    category: "History",
    explanation: "The Métis are a distinct Aboriginal people with a unique culture that emerged from the relations between First Nations peoples and European settlers."
  },
  {
    id: 70,
    question: "What is Canada's system of government called?",
    options: ["Republic", "Dictatorship", "Parliamentary Democracy and Constitutional Monarchy", "Absolute Monarchy"],
    answer: "Parliamentary Democracy and Constitutional Monarchy",
    category: "Government",
    explanation: "Canada is a parliamentary democracy, where citizens elect representatives to Parliament, and a constitutional monarchy, where the King or Queen is the head of state."
  },
  {
    id: 71,
    question: "What is a fundamental freedom guaranteed in the Charter?",
    options: ["Freedom of speech", "Freedom to own land", "Freedom from taxes", "Freedom to drive"],
    answer: "Freedom of speech",
    category: "Rights and Responsibilities",
    explanation: "Freedom of thought, belief, opinion and expression, including freedom of the press and other media of communication, is one of the four fundamental freedoms in the Charter."
  },
  {
    id: 72,
    question: "Which city is the capital of British Columbia?",
    options: ["Vancouver", "Victoria", "Kelowna", "Whistler"],
    answer: "Victoria",
    category: "Geography",
    explanation: "Victoria, located on Vancouver Island, is the capital city of the province of British Columbia."
  },
  {
    id: 73,
    question: "What was the 'Quiet Revolution'?",
    options: ["A war in the 1700s", "A period of rapid social and political change in Quebec in the 1960s", "The construction of the Canadian Pacific Railway", "The women's suffrage movement"],
    answer: "A period of rapid social and political change in Quebec in the 1960s",
    category: "History",
    explanation: "The Quiet Revolution was a time of intense socio-political and socio-cultural change in Quebec, characterized by secularization, the creation of a welfare state, and the realignment of politics into federalist and sovereigntist factions."
  },
  {
    id: 74,
    question: "Which level of government is responsible for national defence?",
    options: ["Municipal", "Provincial/Territorial", "Federal", "All of the above"],
    answer: "Federal",
    category: "Government",
    explanation: "The federal government has responsibility for matters of national and international concern, such as national defence, foreign policy, and currency."
  },
  {
    id: 75,
    question: "What is the official winter sport of Canada?",
    options: ["Hockey", "Lacrosse", "Curling", "Skiing"],
    answer: "Hockey",
    category: "Symbols",
    explanation: "Ice hockey was declared the official national winter sport of Canada in 1994."
  },
  {
    id: 76,
    question: "What mountain range forms the border between Alberta and British Columbia?",
    options: ["The Appalachian Mountains", "The Rocky Mountains", "The Laurentian Mountains", "The Coast Mountains"],
    answer: "The Rocky Mountains",
    category: "Geography",
    explanation: "The majestic Rocky Mountains run along the border between Alberta and British Columbia."
  },
  {
    id: 77,
    question: "Who was Louis Riel?",
    options: ["A Father of Confederation", "A Métis leader who fought for the rights of his people", "Canada's first astronaut", "The founder of the Hudson's Bay Company"],
    answer: "A Métis leader who fought for the rights of his people",
    category: "History",
    explanation: "Louis Riel was a pivotal figure in Canadian history, a Métis leader who led two resistance movements against the Canadian government and is considered a founder of Manitoba."
  },
  {
    id: 78,
    question: "How is a government formed after a federal election?",
    options: ["The party with the most elected representatives becomes the party in power", "The Queen chooses the government", "The Senators vote for the government", "The party that wins in Ontario forms the government"],
    answer: "The party with the most elected representatives becomes the party in power",
    category: "Government",
    explanation: "Typically, the political party that has the most members elected to the House of Commons forms the government. The leader of this party becomes the Prime Minister."
  },
  {
    id: 79,
    question: "What does 'equality before the law' mean?",
    options: ["Rich people have more rights", "Everyone is treated the same under the law, regardless of their background", "Only citizens have rights", "Laws do not apply to politicians"],
    answer: "Everyone is treated the same under the law, regardless of their background",
    category: "Rights and Responsibilities",
    explanation: "This principle, protected by the Charter, means that every individual is equal under the law and is entitled to equal protection and benefit of the law without discrimination."
  },
  {
    id: 80,
    question: "What is Canada's national tree?",
    options: ["The Oak Tree", "The Pine Tree", "The Maple Tree", "The Birch Tree"],
    answer: "The Maple Tree",
    category: "Symbols",
    explanation: "The maple tree was officially recognized as a national symbol of Canada in 1996. The maple leaf is the most well-known symbol of the country."
  },
  {
    id: 81,
    question: "Which is the smallest province by land area?",
    options: ["Nova Scotia", "New Brunswick", "Prince Edward Island", "Newfoundland and Labrador"],
    answer: "Prince Edward Island",
    category: "Geography",
    explanation: "Prince Edward Island (P.E.I.) is Canada's smallest province in terms of both land area and population."
  },
  {
    id: 82,
    question: "What major event led to the War of 1812?",
    options: ["French Revolution", "British desire to reclaim the United States and Canada", "American desire to conquer Canada", "The fur trade dispute"],
    answer: "British desire to reclaim the United States and Canada",
    category: "History",
    explanation: "The War of 1812 was fought between the United States and Great Britain, with British North American colonies (Canada) being heavily involved. Key causes included British interference with American trade and American expansionist ambitions."
  },
  {
    id: 83,
    question: "What is a 'majority government'?",
    options: ["When the governing party has more than half of the seats in the House of Commons", "When two parties govern together", "When the governing party has less than half the seats", "When the Senate has more power than the House of Commons"],
    answer: "When the governing party has more than half of the seats in the House of Commons",
    category: "Government",
    explanation: "A majority government occurs when the party in power holds at least half of the seats in the House of Commons, which gives it strong control over the legislative process."
  },
  {
    id: 84,
    question: "What is the official summer sport of Canada?",
    options: ["Baseball", "Soccer", "Lacrosse", "Basketball"],
    answer: "Lacrosse",
    category: "Symbols",
    explanation: "Lacrosse, a sport with Indigenous origins, was declared the official national summer sport of Canada in 1994."
  },
  {
    id: 85,
    question: "What are the Great Lakes?",
    options: ["Five large lakes in Eastern Canada", "Five large lakes on the border between Canada and the United States", "A series of small lakes in the Rockies", "Lakes in Northern Quebec"],
    answer: "Five large lakes on the border between Canada and the United States",
    category: "Geography",
    explanation: "The Great Lakes are a series of five interconnected freshwater lakes (Superior, Michigan, Huron, Erie, and Ontario) that form part of the Canada-U.S. border."
  },
  {
    id: 86,
    question: "What is the significance of the Quebec Act of 1774?",
    options: ["It created the province of Quebec", "It allowed for religious freedom for Catholics and restored French civil law", "It started the Quiet Revolution", "It made English the only official language"],
    answer: "It allowed for religious freedom for Catholics and restored French civil law",
    category: "History",
    explanation: "The Quebec Act was passed by the British Parliament to gain the loyalty of the French-speaking population. It guaranteed their religious freedom and kept French civil law, which has shaped modern Quebec."
  },
  {
    id: 87,
    question: "Which level of government is responsible for education and healthcare?",
    options: ["Federal", "Provincial/Territorial", "Municipal", "Federal and Provincial equally"],
    answer: "Provincial/Territorial",
    category: "Government",
    explanation: "Provinces and territories have responsibility for areas such as education, healthcare, and highways."
  },
  {
    id: 88,
    question: "What is the Canadian motto?",
    options: ["From Sea to Sea", "Strong and Free", "Peace, Order, and Good Government", "Home and Native Land"],
    answer: "From Sea to Sea",
    category: "Symbols",
    explanation: "Canada's motto, 'A Mari Usque Ad Mare,' translates from Latin to 'From Sea to Sea.' It is taken from Psalm 72:8."
  },
  {
    id: 89,
    question: "Which province is Canada's main producer of hydroelectricity?",
    options: ["British Columbia", "Ontario", "Quebec", "Manitoba"],
    answer: "Quebec",
    category: "Geography",
    explanation: "Quebec is the largest producer of hydroelectricity in Canada, with a vast network of rivers and reservoirs."
  },
  {
    id: 90,
    question: "What is required before a bill can become a law?",
    options: ["The approval of the Prime Minister", "A national referendum", "It must pass in both the House of Commons and the Senate and receive Royal Assent", "The approval of the Supreme Court"],
    answer: "It must pass in both the House of Commons and the Senate and receive Royal Assent",
    category: "Government",
    explanation: "For a bill to become law, it must be passed by a majority vote in both the House of Commons and the Senate. Afterward, it must be given Royal Assent by the Governor General."
  },
  {
    id: 91,
    question: "Who was the first woman to be appointed to the Supreme Court of Canada?",
    options: ["Kim Campbell", "Bertha Wilson", "Jeanne Sauvé", "Adrienne Clarkson"],
    answer: "Bertha Wilson",
    category: "History",
    explanation: "In 1982, Bertha Wilson became the first woman appointed to be a Justice of the Supreme Court of Canada."
  },
  {
    id: 92,
    question: "What fundamental freedom allows you to join or leave a group?",
    options: ["Freedom of expression", "Freedom of association", "Freedom of conscience", "Freedom of peaceful assembly"],
    answer: "Freedom of association",
    category: "Rights and Responsibilities",
    explanation: "Freedom of association protects the right of individuals to form and join groups, such as unions, political parties, or cultural organizations."
  },
  {
    id: 93,
    question: "What is the capital of Alberta?",
    options: ["Calgary", "Edmonton", "Red Deer", "Banff"],
    answer: "Edmonton",
    category: "Geography",
    explanation: "Edmonton is the capital city of the province of Alberta."
  },
  {
    id: 94,
    question: "What does 'confederation' mean?",
    options: ["The joining of provinces to form a new country", "A type of government", "The Canadian constitution", "A military alliance"],
    answer: "The joining of provinces to form a new country",
    category: "History",
    explanation: "Confederation refers to the process on July 1, 1867, when the British North American colonies of Canada, Nova Scotia, and New Brunswick were united into one Dominion of Canada."
  },
  {
    id: 95,
    question: "Which political party is currently in power at the federal level?",
    options: ["This can change with each election", "Conservative Party", "Liberal Party", "New Democratic Party"],
    answer: "This can change with each election",
    category: "Government",
    explanation: "The party in power is the one that wins the most seats in a general election. This information changes over time. You should check the Parliament of Canada website for the current government."
  },
  {
    id: 96,
    question: "What is a major river in Quebec?",
    options: ["Fraser River", "Mackenzie River", "St. Lawrence River", "Red River"],
    answer: "St. Lawrence River",
    category: "Geography",
    explanation: "The St. Lawrence River is a historically significant and economically vital waterway that flows through Southern Quebec, connecting the Great Lakes with the Atlantic Ocean."
  },
  {
    id: 97,
    question: "What is a 'minority government'?",
    options: ["When the governing party has fewer than half the seats in the House of Commons", "When the government represents only minority groups", "A government that lasts for a short time", "When the Senate overrules the House of Commons"],
    answer: "When the governing party has fewer than half the seats in the House of Commons",
    category: "Government",
    explanation: "A minority government occurs when the governing party has the most seats, but still fewer than all the other parties combined. They must rely on the support of other parties to pass legislation."
  },
  {
    id: 98,
    question: "Who was a key architect of the Canadian Pacific Railway?",
    options: ["Sir John A. Macdonald", "Louis Riel", "Alexander Mackenzie", "Donald Smith (Lord Strathcona)"],
    answer: "Donald Smith (Lord Strathcona)",
    category: "History",
    explanation: "Donald Smith, also known as Lord Strathcona, was the financial backer who drove the last spike of the Canadian Pacific Railway in 1885, a project championed by Prime Minister John A. Macdonald to unite Canada from coast to coast."
  },
  {
    id: 99,
    question: "What is the role of the Governor General?",
    options: ["To represent the Sovereign in Canada", "To lead the government", "To command the police", "To write laws"],
    answer: "To represent the Sovereign in Canada",
    category: "Government",
    explanation: "The Governor General is the monarch's representative in Canada. Their duties include giving Royal Assent to bills, reading the Speech from the Throne, and acting as Commander-in-Chief."
  },
  {
    id: 100,
    question: "What is the name of the police force for all of Canada?",
    options: ["The Royal Canadian Mounted Police (RCMP)", "The Federal Bureau of Investigation (FBI)", "The Ontario Provincial Police (OPP)", "The Sûreté du Québec (SQ)"],
    answer: "The Royal Canadian Mounted Police (RCMP)",
    category: "Symbols",
    explanation: "The RCMP is Canada's national police force, providing federal policing services and also serving as the provincial/territorial or municipal police force in many areas."
  },
  {
    id: 101,
    question: "Which legal document recognizes the rights of Aboriginal peoples?",
    options: ["The Constitution Act, 1982", "The British North America Act", "The Bill of Rights", "The Quebec Act"],
    answer: "The Constitution Act, 1982",
    category: "Rights and Responsibilities",
    explanation: "Section 35 of the Constitution Act, 1982, recognizes and affirms the existing Aboriginal and treaty rights of the Aboriginal peoples of Canada."
  },
  {
    id: 102,
    question: "What are the Atlantic provinces?",
    options: ["Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador", "Quebec and Ontario", "British Columbia and Alberta", "The three territories"],
    answer: "Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador",
    category: "Geography",
    explanation: "The four Atlantic provinces are located on Canada's east coast."
  },
  {
    id: 103,
    question: "Who led the movement for women's suffrage in Canada?",
    options: ["The Famous Five", "Laura Secord", "The Sisters of Charity", "The United Empire Loyalists"],
    answer: "The Famous Five",
    category: "History",
    explanation: "The Famous Five were five Alberta women who, in the 'Persons Case' of 1929, won the right for women to be appointed to the Senate. This was a major victory for women's rights and equality."
  },
  {
    id: 104,
    question: "What is a 'portfolio' in the context of Canadian government?",
    options: ["A type of briefcase carried by MPs", "The specific responsibilities of a cabinet minister (e.g., Minister of Finance)", "A collection of stocks and bonds owned by the government", "A government building"],
    answer: "The specific responsibilities of a cabinet minister (e.g., Minister of Finance)",
    category: "Government",
    explanation: "The Prime Minister assigns each cabinet minister a portfolio, which is the area of government they are in charge of, such as Health, Justice, or National Defence."
  },
  {
    id: 105,
    question: "Which city is Canada's financial capital?",
    options: ["Vancouver", "Montreal", "Calgary", "Toronto"],
    answer: "Toronto",
    category: "Geography",
    explanation: "Toronto is the heart of Canada's financial services industry, home to the Toronto Stock Exchange and the headquarters of the five largest Canadian banks."
  },
  {
    id: 106,
    question: "What is the Canadian system for providing healthcare?",
    options: ["A private system paid for by individuals", "A universal system paid for by taxes", "A system only for the wealthy", "A system run by charities"],
    answer: "A universal system paid for by taxes",
    category: "Rights and Responsibilities",
    explanation: "Canada has a universal healthcare system, often called Medicare. It is funded by federal and provincial taxes and provides access to medically necessary hospital and physician services for all citizens and permanent residents."
  },
  {
    id: 107,
    question: "Who was Sir Wilfrid Laurier?",
    options: ["The first French-Canadian prime minister", "A famous general", "An inventor", "The discoverer of insulin"],
    answer: "The first French-Canadian prime minister",
    category: "History",
    explanation: "Sir Wilfrid Laurier was the first French-Canadian Prime Minister, serving from 1896 to 1911. He encouraged immigration to the West and managed a period of great economic growth."
  },
  {
    id: 108,
    question: "How can a party in opposition defeat the government in a minority situation?",
    options: ["By winning a vote of non-confidence", "By appealing to the Queen", "By refusing to attend Parliament", "They cannot defeat the government"],
    answer: "By winning a vote of non-confidence",
    category: "Government",
    explanation: "In a minority government situation, if the government loses a major vote on a budget or another key issue, it is considered a vote of non-confidence. This can force the government to resign or call an election."
  },
  {
    id: 109,
    question: "Which province is the only one to not have a land border with another province?",
    options: ["British Columbia", "Newfoundland and Labrador", "Prince Edward Island", "Nova Scotia"],
    answer: "Newfoundland and Labrador",
    category: "Geography",
    explanation: "The island of Newfoundland is separated from the other provinces by the sea. The Labrador portion borders Quebec, but the province as a whole is not fully connected by land."
  },
  {
    id: 110,
    question: "What is the title of the head of government in a province?",
    options: ["Prime Minister", "Mayor", "Premier", "Governor"],
    answer: "Premier",
    category: "Government",
    explanation: "The head of a provincial government is called the Premier. In the territories, this leader is also sometimes called the Premier."
  },
  {
    id: 111,
    question: "What does it mean to be a member of the Commonwealth?",
    options: ["Canada must obey British laws", "Canada is part of a free association of former British colonies", "Canada uses the British currency", "Canada's military is controlled by Britain"],
    answer: "Canada is part of a free association of former British colonies",
    category: "Rights and Responsibilities",
    explanation: "The Commonwealth is a voluntary association of 54 countries, most with historic links to the British Empire. Members cooperate on shared goals like development, democracy, and peace."
  },
  {
    id: 112,
    question: "What major railway was completed in 1885, connecting eastern and western Canada?",
    options: ["The Grand Trunk Railway", "The Canadian National Railway", "The Canadian Pacific Railway", "The Intercolonial Railway"],
    answer: "The Canadian Pacific Railway",
    category: "History",
    explanation: "The completion of the Canadian Pacific Railway was a monumental engineering feat that physically united Canada and fulfilled a promise made to British Columbia to join Confederation."
  },
  {
    id: 113,
    question: "What is the capital of Nova Scotia?",
    options: ["Sydney", "Dartmouth", "Halifax", "Truro"],
    answer: "Halifax",
    category: "Geography",
    explanation: "Halifax is the capital of Nova Scotia and a major economic centre for Atlantic Canada."
  },
  {
    id: 114,
    question: "Who is the Commander-in-Chief of the Canadian Armed Forces?",
    options: ["The Prime Minister", "The Minister of National Defence", "The Governor General", "The Chief of the Defence Staff"],
    answer: "The Governor General",
    category: "Government",
    explanation: "The Governor General represents the monarch and formally serves as the Commander-in-Chief of the Canadian Armed Forces."
  },
  {
    id: 115,
    question: "What is a 'referendum'?",
    options: ["A federal election", "A vote by the public on a specific question", "A debate in the Senate", "A decision by a judge"],
    answer: "A vote by the public on a specific question",
    category: "Government",
    explanation: "A referendum is a direct vote in which an entire electorate is invited to vote on a particular proposal. This may result in the adoption of a new law. For example, Quebec held referendums on sovereignty in 1980 and 1995."
  },
  {
    id: 116,
    question: "Which war had a profound effect on shaping modern Canada's identity and sense of independence?",
    options: ["The War of 1812", "The South African War (Boer War)", "World War I", "The Korean War"],
    answer: "World War I",
    category: "History",
    explanation: "Canada's significant contributions and sacrifices in World War I, particularly at battles like Vimy Ridge, fostered a strong sense of national identity and led to greater independence from Britain."
  },
  {
    id: 117,
    question: "What is the name of the Queen's representative in a province?",
    options: ["The Premier", "The Lieutenant Governor", "The Commissioner", "The Mayor"],
    answer: "The Lieutenant Governor",
    category: "Government",
    explanation: "The Lieutenant Governor is the representative of the Crown in a province, performing similar duties to the Governor General but at the provincial level."
  },
  {
    id: 118,
    question: "Which city is the capital of Quebec?",
    options: ["Montreal", "Quebec City", "Gatineau", "Sherbrooke"],
    answer: "Quebec City",
    category: "Geography",
    explanation: "Quebec City is the capital of the province of Quebec and one of the oldest cities in North America."
  },
  {
    id: 119,
    question: "What is the 'cabinet' in the federal government?",
    options: ["A piece of furniture in the Prime Minister's office", "A committee of Senators", "The Prime Minister and the ministers he or she chooses", "The opposition critics"],
    answer: "The Prime Minister and the ministers he or she chooses",
    category: "Government",
    explanation: "The cabinet consists of the Prime Minister and ministers they select to be in charge of various government departments (portfolios). It is the key decision-making body in the executive branch."
  },
  {
    id: 120,
    question: "The 'Persons Case' of 1929 established what?",
    options: ["That women are 'persons' and can be appointed to the Senate", "That Aboriginal people are 'persons'", "The right to a lawyer", "The voting age"],
    answer: "That women are 'persons' and can be appointed to the Senate",
    category: "History",
    explanation: "The landmark 'Persons Case', brought forward by the Famous Five, was a legal ruling that established women were eligible to be appointed to the Senate, a major step forward for women's equality."
  },
  {
    id: 121,
    question: "What is the capital of Manitoba?",
    options: ["Brandon", "Thompson", "Winnipeg", "Portage la Prairie"],
    answer: "Winnipeg",
    category: "Geography",
    explanation: "Winnipeg is the capital and largest city of Manitoba."
  },
  {
    id: 122,
    question: "Which of these is a right of Canadian citizenship?",
    options: ["The right to a guaranteed job", "The right to enter and leave Canada", "The right to free housing", "The right to not pay taxes"],
    answer: "The right to enter and leave Canada",
    category: "Rights and Responsibilities",
    explanation: "Mobility rights, protected by the Charter, include the right of citizens to enter, remain in, and leave Canada."
  },
  {
    id: 123,
    question: "In what year did Newfoundland and Labrador join Canada?",
    options: ["1867", "1905", "1949", "1999"],
    answer: "1949",
    category: "History",
    explanation: "Newfoundland was a separate British colony until it joined Canada as the 10th province in 1949."
  },
  {
    id: 124,
    question: "Which level of government is responsible for services like garbage collection and recycling?",
    options: ["Federal", "Provincial/Territorial", "Municipal", "Regional"],
    answer: "Municipal",
    category: "Government",
    explanation: "Municipal (or local) governments are responsible for services that affect the daily lives of residents, such as roads, sewers, garbage collection, and parks."
  },
  {
    id: 125,
    question: "What is the Canadian Shield?",
    options: ["A military defence system", "A large area of exposed Precambrian rock that covers much of Canada", "A hockey trophy", "The coat of arms"],
    answer: "A large area of exposed Precambrian rock that covers much of Canada",
    category: "Geography",
    explanation: "The Canadian Shield is a vast geological formation of ancient rock, rich in mineral resources, that covers about half of Canada's landmass."
  },
  {
    id: 126,
    question: "What is the term for the formal ceremony where a bill becomes law?",
    options: ["Royal Assent", "First Reading", "A vote of non-confidence", "Question Period"],
    answer: "Royal Assent",
    category: "Government",
    explanation: "Royal Assent is the final step in the legislative process, where the Governor General (or Lieutenant Governor for provincial bills) approves a bill on behalf of the Sovereign, making it law."
  },
  {
    id: 127,
    question: "What did the '60s Scoop' refer to?",
    options: ["A popular ice cream flavour", "A large-scale removal of Indigenous children from their families into the child welfare system", "A dance craze in the 1960s", "A gold rush in the Yukon"],
    answer: "A large-scale removal of Indigenous children from their families into the child welfare system",
    category: "History",
    explanation: "The '60s Scoop' was a tragic period where a large number of Indigenous children were taken from their families and communities and placed in non-Indigenous homes, leading to a loss of culture and identity."
  },
  {
    id: 128,
    question: "What does it mean to 'obey the law'?",
    options: ["It is optional for citizens", "It is a responsibility of Canadian citizenship", "Only major laws need to be followed", "Laws only apply to non-citizens"],
    answer: "It is a responsibility of Canadian citizenship",
    category: "Rights and Responsibilities",
    explanation: "One of the fundamental duties of any Canadian citizen is to obey Canada's laws. These laws are made by elected representatives and are intended to maintain order and a peaceful society."
  },
  {
    id: 129,
    question: "What is the capital of Ontario?",
    options: ["Ottawa", "Toronto", "Hamilton", "London"],
    answer: "Toronto",
    category: "Geography",
    explanation: "Toronto is the capital of the province of Ontario and is Canada's largest city."
  },
  {
    id: 130,
    question: "Who was the first European to map Canada's east coast?",
    options: ["Christopher Columbus", "John Cabot", "Jacques Cartier", "Henry Hudson"],
    answer: "John Cabot",
    category: "History",
    explanation: "John Cabot, an Italian explorer sailing for England, landed on the east coast of Canada in 1497 and claimed the land for England. He was the first European to draw a map of Canada's eastern coastline."
  },
  {
    id: 131,
    question: "What is the name of the body that resolves disputes about the law?",
    options: ["Parliament", "The Cabinet", "The police", "The judiciary (courts)"],
    answer: "The judiciary (courts)",
    category: "Government",
    explanation: "The judicial branch, composed of courts and judges, is responsible for interpreting laws and resolving legal disputes independently from the other branches of government."
  },
  {
    id: 132,
    question: "Which region covers more than one-third of Canada?",
    options: ["The West Coast", "The North", "The Prairies", "Central Canada"],
    answer: "The North",
    category: "Geography",
    explanation: "Canada's vast northern region, which includes the three territories, covers over one-third of the country's landmass but is sparsely populated."
  },
  {
    id: 133,
    question: "What do mobility rights guarantee?",
    options: ["The right to own a car", "The right to move to and live in any province, and to leave and enter Canada", "The right to a free bus pass", "The right to change jobs"],
    answer: "The right to move to and live in any province, and to leave and enter Canada",
    category: "Rights and Responsibilities",
    explanation: "Mobility rights, outlined in the Charter, ensure that Canadian citizens can live and work anywhere in Canada, and can freely enter and leave the country."
  },
  {
    id: 134,
    question: "What was the result of the War of 1812 for Canada?",
    options: ["Canada became part of the United States", "Canada remained independent of the United States", "Canada became a republic", "The border was moved"],
    answer: "Canada remained independent of the United States",
    category: "History",
    explanation: "A key outcome of the War of 1812 was the successful defence of British North America against American invasion, which helped solidify the border and ensured Canada would develop as a separate country from the USA."
  },
  {
    id: 135,
    question: "In what part of Parliament are laws debated and voted on?",
    options: ["The Library of Parliament", "The Senate", "The House of Commons", "The office of the Prime Minister"],
    answer: "The House of Commons",
    category: "Government",
    explanation: "The House of Commons, composed of elected Members of Parliament, is the major law-making body where bills are introduced, debated, and voted upon."
  },
  {
    id: 136,
    question: "Which province has its own distinct legal code based on French civil law?",
    options: ["Ontario", "New Brunswick", "Manitoba", "Quebec"],
    answer: "Quebec",
    category: "Government",
    explanation: "Due to its history, Quebec has a civil code for matters of private law, which is based on the French legal tradition, unlike the rest of Canada which uses English common law."
  },
  {
    id: 137,
    question: "What is the capital of Saskatchewan?",
    options: ["Saskatoon", "Regina", "Moose Jaw", "Prince Albert"],
    answer: "Regina",
    category: "Geography",
    explanation: "Regina is the capital city of Saskatchewan."
  },
  {
    id: 138,
    question: "What is a key responsibility of citizenship that helps keep Canada a peaceful and orderly society?",
    options: ["Making lots of money", "Volunteering in the community", "Obeying the law", "Speaking both official languages"],
    answer: "Obeying the law",
    category: "Rights and Responsibilities",
    explanation: "Respecting and obeying federal, provincial, and municipal laws is a core responsibility of every Canadian citizen, ensuring a safe and orderly society for all."
  },
  {
    id: 139,
    question: "Who was the head of the provisional government during the Red River Rebellion?",
    options: ["Sir John A. Macdonald", "Louis Riel", "Thomas Scott", "Gabriel Dumont"],
    answer: "Louis Riel",
    category: "History",
    explanation: "Louis Riel led the Métis of the Red River settlement and formed a provisional government to negotiate the terms of Manitoba's entry into Confederation in 1870."
  },
  {
    id: 140,
    question: "At what age can you stand for election to the House of Commons?",
    options: ["16", "18", "21", "25"],
    answer: "18",
    category: "Rights and Responsibilities",
    explanation: "Any Canadian citizen who is at least 18 years old on election day is eligible to run for a seat in the House of Commons."
  },
  {
    id: 141,
    question: "What are the first people to live in Canada called?",
    options: ["Pioneers", "Settlers", "Aboriginal Peoples", "Founders"],
    answer: "Aboriginal Peoples",
    category: "History",
    explanation: "The first people to inhabit what is now Canada were the ancestors of today's Aboriginal peoples (First Nations, Inuit, and Métis), who have been here for thousands of years."
  },
  {
    id: 142,
    question: "Which level of government issues passports?",
    options: ["Municipal", "Provincial", "Federal", "All of them"],
    answer: "Federal",
    category: "Government",
    explanation: "The federal government is responsible for foreign affairs and international relations, which includes the issuance of Canadian passports."
  },
  {
    id: 143,
    question: "What is the capital of Prince Edward Island?",
    options: ["Summerside", "Montague", "Charlottetown", "Souris"],
    answer: "Charlottetown",
    category: "Geography",
    explanation: "Charlottetown is the capital of Prince Edward Island and is known as the 'Birthplace of Confederation' because the first conference to discuss uniting the provinces was held there in 1864."
  },
  {
    id: 144,
    question: "What does 'freedom of thought, belief, opinion and expression' include?",
    options: ["The right to vote", "Freedom of the press and other media", "The right to a fair trial", "The right to bear arms"],
    answer: "Freedom of the press and other media",
    category: "Rights and Responsibilities",
    explanation: "This fundamental freedom is broad and includes the right for the media to report on what is happening in Canada and the world without censorship from the government."
  },
  {
    id: 145,
    question: "What system ensures that the government is held accountable to the people?",
    options: ["The monarchy", "The civil service", "Responsible government", "The court system"],
    answer: "Responsible government",
    category: "Government",
    explanation: "Responsible government is a key principle in Canada. It means that the executive branch (the cabinet) must have the confidence and support of the elected House of Commons to stay in power."
  },
  {
    id: 146,
    question: "Who was the first European explorer to reach Canada's Pacific coast?",
    options: ["Captain James Cook", "Sir Francis Drake", "Vitus Bering", "George Vancouver"],
    answer: "Captain James Cook",
    category: "History",
    explanation: "British sea captain James Cook was one of the first Europeans to map the Pacific coast of North America, landing on Vancouver Island in 1778."
  },
  {
    id: 147,
    question: "What is the name of the Queen's representative in the territories?",
    options: ["The Lieutenant Governor", "The Premier", "The Commissioner", "The Governor"],
    answer: "The Commissioner",
    category: "Government",
    explanation: "In Canada's three territories, the federal government is represented by a Commissioner, who fulfills a role similar to that of a provincial Lieutenant Governor."
  },
  {
    id: 148,
    question: "Which city is the capital of New Brunswick?",
    options: ["Moncton", "Saint John", "Fredericton", "Bathurst"],
    answer: "Fredericton",
    category: "Geography",
    explanation: "Fredericton is the capital city of the province of New Brunswick."
  },
  {
    id: 149,
    question: "What is a 'by-election'?",
    options: ["A national election", "An election held in an electoral district to fill a vacant seat", "A vote for the leader of a party", "A municipal election"],
    answer: "An election held in an electoral district to fill a vacant seat",
    category: "Government",
    explanation: "A by-election is held between general elections in a single riding to fill a seat that has become vacant, for example, due to the resignation or death of a Member of Parliament."
  },
  {
    id: 150,
    question: "What was a major consequence of the Great Depression of the 1930s for Canada?",
    options: ["It led to the creation of social assistance programs", "It caused Canada to join the United States", "It had no effect on Canada", "It led to World War II"],
    answer: "It led to the creation of social assistance programs",
    category: "History",
    explanation: "The widespread hardship of the Great Depression prompted the Canadian government to begin creating a 'social safety net', including programs like employment insurance and family allowance, to support its citizens."
  },
  {
    id: 151,
    question: "What is the capital of Newfoundland and Labrador?",
    options: ["Corner Brook", "St. John's", "Mount Pearl", "Gander"],
    answer: "St. John's",
    category: "Geography",
    explanation: "St. John's is the capital and largest city of Newfoundland and Labrador, and is one of the oldest European settlements in North America."
  },
  {
    id: 152,
    question: "What is the primary role of the police in Canada?",
    options: ["To make laws", "To keep people safe and to enforce the law", "To advise the government", "To run the prisons"],
    answer: "To keep people safe and to enforce the law",
    category: "Rights and Responsibilities",
    explanation: "Police forces in Canada at the federal, provincial, and municipal levels are responsible for law enforcement, crime prevention, and maintaining public order."
  },
  {
    id: 153,
    question: "How is the Prime Minister chosen?",
    options: ["By a national popular vote", "He or she is the leader of the party with the most seats in the House of Commons", "Appointed by the Queen", "Elected by the Senate"],
    answer: "He or she is the leader of the party with the most seats in the House of Commons",
    category: "Government",
    explanation: "After a federal election, the Governor General invites the leader of the party that won the most seats to form a government and become Prime Minister."
  },
  {
    id: 154,
    question: "Who are the 'Inuit'?",
    options: ["The Aboriginal people of the Arctic", "The first settlers of Quebec", "Métis people from the Red River", "A First Nation from Ontario"],
    answer: "The Aboriginal people of the Arctic",
    category: "History",
    explanation: "The Inuit are an Aboriginal people who live in Canada's vast northern Arctic regions. Their name means 'the people' in their language, Inuktitut."
  },
  {
    id: 155,
    question: "What is the name of the local government for a city or town?",
    options: ["Provincial government", "Federal government", "Municipality", "Riding"],
    answer: "Municipality",
    category: "Government",
    explanation: "A municipality is the level of government responsible for a specific local area, such as a city, town, or district. It is led by a mayor and council."
  },
  {
    id: 156,
    question: "What is the largest religious affiliation in Canada?",
    options: ["Islam", "Judaism", "Christianity", "No affiliation"],
    answer: "Christianity",
    category: "Geography",
    explanation: "While Canada has a diverse range of religions and a growing number of people with no religious affiliation, Christianity remains the largest religion in the country."
  },
  {
    id: 157,
    question: "What does volunteering in your community demonstrate?",
    options: ["A way to get paid", "A responsibility of citizenship", "A legal requirement", "Something only for retired people"],
    answer: "A responsibility of citizenship",
    category: "Rights and Responsibilities",
    explanation: "Volunteering is an excellent way to contribute to the well-being of your community and the country. It is considered an important responsibility for citizens, although it is not a mandatory duty."
  },
  {
    id: 158,
    question: "What happened to the Acadians after the British took control of their lands?",
    options: ["They were given more land", "They were expelled from their homes in an event known as the 'Great Upheaval'", "They were all sent back to France", "They became the rulers of the region"],
    answer: "They were expelled from their homes in an event known as the 'Great Upheaval'",
    category: "History",
    explanation: "Between 1755 and 1763, the British deported thousands of Acadians from their homes in the Maritimes. This tragic event is known as the Great Upheaval or the Expulsion of the Acadians."
  },
  {
    id: 159,
    question: "What is the capital of the Northwest Territories?",
    options: ["Inuvik", "Hay River", "Whitehorse", "Yellowknife"],
    answer: "Yellowknife",
    category: "Geography",
    explanation: "Yellowknife is the capital and only city in the Northwest Territories."
  },
  {
    id: 160,
    question: "Who can ask you how you voted in an election?",
    options: ["The police", "Your employer", "An election official", "No one has the right to ask you how you voted"],
    answer: "No one has the right to ask you how you voted",
    category: "Rights and Responsibilities",
    explanation: "The vote is secret. It is your private decision, and no one, including family members, employers, or government officials, has the right to insist that you tell them how you voted."
  },
  {
    id: 161,
    question: "What is a 'Speech from the Throne'?",
    options: ["A speech by the Queen on TV", "The Prime Minister's victory speech", "A speech written by the government and read by the Governor General, outlining the government's plans for the session of Parliament", "A debate between party leaders"],
    answer: "A speech written by the government and read by the Governor General, outlining the government's plans for the session of Parliament",
    category: "Government",
    explanation: "The Speech from the Throne opens a new session of Parliament and outlines the government's agenda and legislative priorities."
  },
  {
    id: 162,
    question: "What was 'Expo 67'?",
    options: ["A world's fair held in Montreal in 1967", "A sports tournament", "A political conference", "A music festival"],
    answer: "A world's fair held in Montreal in 1967",
    category: "History",
    explanation: "Expo 67 was a highly successful international exhibition held in Montreal to mark Canada's 100th birthday. It was a major cultural event that showcased Canada to the world."
  },
  {
    id: 163,
    question: "What is the capital of Yukon?",
    options: ["Dawson City", "Whitehorse", "Watson Lake", "Yellowknife"],
    answer: "Whitehorse",
    category: "Geography",
    explanation: "Whitehorse is the capital and largest city of the Yukon territory."
  },
  {
    id: 164,
    question: "Which government body acts as the 'sober second thought' in the legislative process?",
    options: ["The House of Commons", "The Supreme Court", "The Cabinet", "The Senate"],
    answer: "The Senate",
    category: "Government",
    explanation: "The Senate's role is to provide a 'sober second thought' by carefully reviewing legislation passed by the House of Commons. Senators are not elected and are expected to be less partisan."
  },
  {
    id: 165,
    question: "What is a key right of a Canadian citizen?",
    options: ["The right to vote in federal and provincial elections", "The right to a government job", "The right to free housing", "The right to ignore laws"],
    answer: "The right to vote in federal and provincial elections",
    category: "Rights and Responsibilities",
    explanation: "The right to vote is a cornerstone of Canadian democracy, allowing citizens to choose their representatives."
  },
  {
    id: 166,
    question: "Who was Sir Sam Steele?",
    options: ["A Father of Confederation", "A great Canadian hockey player", "A famous member of the North-West Mounted Police", "Canada's first astronaut"],
    answer: "A famous member of the North-West Mounted Police",
    category: "History",
    explanation: "Sir Sam Steele was a distinguished officer of the North-West Mounted Police (a forerunner of the RCMP) who played a key role in maintaining law and order during the Klondike Gold Rush."
  },
  {
    id: 167,
    question: "What is the capital of Nunavut?",
    options: ["Rankin Inlet", "Iqaluit", "Cambridge Bay", "Arviat"],
    answer: "Iqaluit",
    category: "Geography",
    explanation: "Iqaluit is the capital city of Canada's newest territory, Nunavut."
  },
  {
    id: 168,
    question: "How many electoral districts (ridings) are there in Canada?",
    options: ["100", "It is fixed by the Constitution", "The number changes based on population shifts", "500"],
    answer: "The number changes based on population shifts",
    category: "Government",
    explanation: "The number of electoral districts is not fixed. It is adjusted every 10 years after the census to reflect changes in Canada's population distribution."
  },
  {
    id: 169,
    question: "What does 'protecting and enjoying our shared heritage' mean?",
    options: ["Only visiting museums", "Preserving Canada's natural, cultural, and historical sites for future generations", "Keeping historical artifacts in private collections", "Learning only about your own family's history"],
    answer: "Preserving Canada's natural, cultural, and historical sites for future generations",
    category: "Rights and Responsibilities",
    explanation: "It is a responsibility of citizens to help preserve the diverse natural and cultural heritage of Canada, from national parks to historic buildings, so that others can continue to enjoy them."
  },
  {
    id: 170,
    question: "What discovery in the Yukon in the 1890s triggered a massive gold rush?",
    options: ["Oil", "Silver", "Gold", "Diamonds"],
    answer: "Gold",
    category: "History",
    explanation: "The discovery of gold in the Klondike region of the Yukon in 1896 led to the famous Klondike Gold Rush, attracting tens of thousands of prospectors to the North."
  },
  {
    id: 171,
    question: "Who can propose a bill in the House of Commons?",
    options: ["Only the Prime Minister", "Any Member of Parliament", "Only the Speaker", "Only Cabinet Ministers"],
    answer: "Any Member of Parliament",
    category: "Government",
    explanation: "Any MP can introduce a bill. Bills introduced by a minister are called government bills, while those introduced by a non-minister MP are called private member's bills."
  },
  {
    id: 172,
    question: "What body of water connects the Great Lakes to the Atlantic Ocean?",
    options: ["The Hudson Bay", "The Mackenzie River", "The St. Lawrence Seaway", "The Fraser River"],
    answer: "The St. Lawrence Seaway",
    category: "Geography",
    explanation: "The St. Lawrence Seaway is a system of locks, canals, and channels in Canada and the United States that permits oceangoing vessels to travel from the Atlantic Ocean to the Great Lakes."
  },
  {
    id: 173,
    question: "What is 'due process'?",
    options: ["The principle that the government must respect all legal rights a person is owed", "The process of becoming a citizen", "The process for electing a Prime Minister", "The process for passing a law"],
    answer: "The principle that the government must respect all legal rights a person is owed",
    category: "Rights and Responsibilities",
    explanation: "Due process is a fundamental legal principle that ensures fair treatment through the normal judicial system. It is a key part of the 'rule of law'."
  },
  {
    id: 174,
    question: "What was the 'baby boom'?",
    options: ["A law about babies", "A period of high birth rates after World War II", "A famous children's story", "A type of explosion"],
    answer: "A period of high birth rates after World War II",
    category: "History",
    explanation: "Following World War II (from about 1946 to 1964), Canada experienced a significant increase in its birth rate, a period known as the baby boom."
  },
  {
    id: 175,
    question: "What are the two parts of the Canadian Parliament?",
    options: ["The Prime Minister and the Cabinet", "The House of Commons and the Senate", "The Legislative and the Executive", "The Government and the Opposition"],
    answer: "The House of Commons and the Senate",
    category: "Government",
    explanation: "Parliament consists of the Sovereign (represented by the Governor General), the Senate (the upper house), and the House of Commons (the lower house)."
  },
  {
    id: 176,
    question: "What is the main purpose of the Canadian Armed Forces?",
    options: ["To enforce traffic laws", "To defend Canada and its interests", "To collect taxes", "To build roads"],
    answer: "To defend Canada and its interests",
    category: "Government",
    explanation: "The Canadian Armed Forces have three main roles: to defend Canada, to defend North America in cooperation with the United States, and to contribute to international peace and security."
  },
  {
    id: 177,
    question: "What is the Canadian Coat of Arms a symbol of?",
    options: ["Canada's national sovereignty", "The Hudson's Bay Company", "A hockey team", "A specific province"],
    answer: "Canada's national sovereignty",
    category: "Symbols",
    explanation: "The Coat of Arms of Canada is a symbol of national sovereignty. It was adopted in 1921 and contains symbols of France, England, Scotland, and Ireland as well as Canadian maple leaves."
  },
  {
    id: 178,
    question: "What are 'legal rights' in the Charter?",
    options: ["Rights for lawyers only", "Rights that ensure fair legal treatment, such as the right to a lawyer", "The right to sue anyone", "The right to make laws"],
    answer: "Rights that ensure fair legal treatment, such as the right to a lawyer",
    category: "Rights and Responsibilities",
    explanation: "Legal rights in the Charter protect individuals in their dealings with the justice system. They include the right to life, liberty, and security of the person, and the right to a fair trial."
  },
  {
    id: 179,
    question: "What was the 'Dominion of Canada'?",
    options: ["The official name of Canada after Confederation in 1867", "A British colony", "The name of Canada before 1867", "A territory in the North"],
    answer: "The official name of Canada after Confederation in 1867",
    category: "History",
    explanation: "Upon Confederation, the new country was named the Dominion of Canada, signifying its self-governing status within the British Empire."
  },
  {
    id: 180,
    question: "What is the role of a political party?",
    options: ["To run the court system", "A group of people with similar ideas on how to run the country", "To appoint Senators", "To enforce laws"],
    answer: "A group of people with similar ideas on how to run the country",
    category: "Government",
    explanation: "Political parties are organizations of people who share similar political beliefs and who work to get their candidates elected to public office to implement their policies."
  },
  {
    id: 181,
    question: "Which province is Canada's largest agricultural producer?",
    options: ["Ontario", "Saskatchewan", "Quebec", "British Columbia"],
    answer: "Saskatchewan",
    category: "Geography",
    explanation: "Saskatchewan is a leader in Canadian agriculture, producing a large portion of the country's grain and oilseeds."
  },
  {
    id: 182,
    question: "Who was Laura Secord?",
    options: ["A hero of the War of 1812", "The first female MP", "A famous painter", "A leader of the women's suffrage movement"],
    answer: "A hero of the War of 1812",
    category: "History",
    explanation: "Laura Secord is a Canadian hero who, during the War of 1812, walked 32 kilometers to warn British forces of an impending American attack, contributing to a British victory."
  },
  {
    id: 183,
    question: "What is 'Question Period' in the House of Commons?",
    options: ["A time for MPs to take a test", "A daily session where MPs can ask questions of the government", "A coffee break", "A secret meeting"],
    answer: "A daily session where MPs can ask questions of the government",
    category: "Government",
    explanation: "Question Period is a key part of the parliamentary day, where opposition members (and government backbenchers) can question the Prime Minister and cabinet ministers to hold them accountable for their actions."
  },
  {
    id: 184,
    question: "What is a responsibility of the federal government?",
    options: ["Education", "Hospitals", "Currency and Banking", "Local roads"],
    answer: "Currency and Banking",
    category: "Government",
    explanation: "The federal government is responsible for matters of national scope, such as the monetary system, national defence, and the postal service."
  },
  {
    id: 185,
    question: "The Parliament Buildings in Ottawa are an example of which architectural style?",
    options: ["Modern", "Art Deco", "Gothic Revival", "Classical"],
    answer: "Gothic Revival",
    category: "Symbols",
    explanation: "The Parliament Buildings are a world-renowned example of the Gothic Revival style of architecture, characterized by pointed arches, spires, and decorative details."
  },
  {
    id: 186,
    question: "What are 'democratic rights' in the Charter?",
    options: ["The right to vote and to be a candidate in an election", "The right to free healthcare", "The right to own property", "The right to a jury trial"],
    answer: "The right to vote and to be a candidate in an election",
    category: "Rights and Responsibilities",
    explanation: "Democratic rights in the Canadian Charter of Rights and Freedoms include the right of every citizen to vote in elections for the House of Commons and provincial legislative assemblies, and the right to be a candidate."
  },
  {
    id: 187,
    question: "What was the 'FLQ Crisis'?",
    options: ["An economic recession", "A series of events in 1970 in Quebec involving kidnappings by a separatist group", "A major flood in Manitoba", "A debate over the flag"],
    answer: "A series of events in 1970 in Quebec involving kidnappings by a separatist group",
    category: "History",
    explanation: "The October Crisis of 1970 involved the kidnapping of two government officials by the Front de libération du Québec (FLQ), a radical separatist group. The federal government invoked the War Measures Act in response."
  },
  {
    id: 188,
    question: "How are judges appointed in Canada?",
    options: ["They are elected", "They are appointed by the government", "They inherit their position", "They are chosen by the police"],
    answer: "They are appointed by the government",
    category: "Government",
    explanation: "Judges are appointed by federal and provincial governments. They are chosen from lists of qualified lawyers and are expected to be impartial and independent."
  },
  {
    id: 189,
    question: "Which five countries are the top five sources of immigrants to Canada?",
    options: ["This can change from year to year", "USA, UK, France, Germany, Italy", "India, China, Philippines, Pakistan, Nigeria", "Mexico, Brazil, Argentina, Colombia, Peru"],
    answer: "This can change from year to year",
    category: "Geography",
    explanation: "The top source countries for immigration to Canada change over time. You can find the most recent statistics on the Immigration, Refugees and Citizenship Canada website."
  },
  {
    id: 190,
    question: "What is the 'House of Commons'?",
    options: ["The upper house of Parliament", "The residence of the Prime Minister", "The elected lower house of Parliament", "A courthouse"],
    answer: "The elected lower house of Parliament",
    category: "Government",
    explanation: "The House of Commons is the democratically elected chamber of the Canadian Parliament, where Members of Parliament debate and pass laws."
  },
  {
    id: 191,
    question: "What is 'multiculturalism' in Canada?",
    options: ["An official policy that encourages Canadians to celebrate their diverse cultural backgrounds", "A type of food", "A political party", "A policy that requires everyone to be the same"],
    answer: "An official policy that encourages Canadians to celebrate their diverse cultural backgrounds",
    category: "Rights and Responsibilities",
    explanation: "Canada's policy of multiculturalism, adopted in 1971, recognizes and promotes the understanding that diversity is a fundamental characteristic of Canadian society. It encourages cultural groups to preserve and share their heritage."
  },
  {
    id: 192,
    question: "Who was Terry Fox?",
    options: ["A Prime Minister", "A famous musician", "An athlete who ran across Canada to raise money for cancer research", "An astronaut"],
    answer: "An athlete who ran across Canada to raise money for cancer research",
    category: "History",
    explanation: "Terry Fox, who had lost a leg to cancer, began the 'Marathon of Hope' in 1980 to raise money for cancer research. He became a national hero for his courage and determination, and annual Terry Fox Runs continue to this day."
  },
  {
    id: 193,
    question: "What does the separation of powers in government prevent?",
    options: ["Elections", "The concentration of power in one branch of government", "Making new laws", "The government from collecting taxes"],
    answer: "The concentration of power in one branch of government",
    category: "Government",
    explanation: "The division of government into legislative, executive, and judicial branches creates a system of checks and balances, ensuring that no single branch can become too powerful."
  },
  {
    id: 194,
    question: "What are some examples of natural resources important to Canada's economy?",
    options: ["Forestry, fishing, energy, and minerals", "Cars, clothing, and electronics", "Banking, insurance, and tourism", "Software, movies, and music"],
    answer: "Forestry, fishing, energy, and minerals",
    category: "Geography",
    explanation: "Canada is rich in natural resources, and industries based on these resources, such as forestry, mining, and oil and gas extraction, are a vital part of the nation's economy."
  },
  {
    id: 195,
    question: "What does it mean to have 'equality of women and men'?",
    options: ["Men and women have different rights", "Men and women are equal under the law", "Only women can vote", "Men and women must have the same jobs"],
    answer: "Men and women are equal under the law",
    category: "Rights and Responsibilities",
    explanation: "In Canada, it is a fundamental value that men and women are equal under the law and have the right to the same opportunities in all aspects of society."
  },
  {
    id: 196,
    question: "Who were the Vikings?",
    options: ["The first Europeans to reach North America", "A First Nations group", "French explorers", "British soldiers"],
    answer: "The first Europeans to reach North America",
    category: "History",
    explanation: "Norse (Viking) explorers from Iceland reached Newfoundland around 1000 AD. They built a settlement at L'Anse aux Meadows, which is now a National Historic Site."
  },
  {
    id: 197,
    question: "What is the title of the head of government in a territory?",
    options: ["Mayor", "Premier", "Commissioner", "Prime Minister"],
    answer: "Premier",
    category: "Government",
    explanation: "Similar to a province, the elected head of government in each of Canada's three territories is called the Premier."
  },
  {
    id: 198,
    question: "What is 'habeas corpus'?",
    options: ["The right to vote", "The right to not be imprisoned without a lawful reason", "Freedom of speech", "The right to a lawyer"],
    answer: "The right to not be imprisoned without a lawful reason",
    category: "Rights and Responsibilities",
    explanation: "The right of habeas corpus, which dates back to English common law, is the right to have a court determine if the government is lawfully detaining you. It prevents unlawful imprisonment."
  },
  {
    id: 199,
    question: "What is the 'Senate'?",
    options: ["The elected lower house", "The upper house of Parliament, whose members are appointed", "The Supreme Court", "The Prime Minister's office"],
    answer: "The upper house of Parliament, whose members are appointed",
    category: "Government",
    explanation: "The Senate is the upper chamber of Canada's Parliament. Its members, or Senators, are appointed by the Governor General on the advice of the Prime Minister to represent regions and minority groups."
  },
  {
    id: 200,
    question: "Who was Dr. Frederick Banting?",
    options: ["A politician", "A famous actor", "A scientist who co-discovered insulin", "A World War I hero"],
    answer: "A scientist who co-discovered insulin",
    category: "History",
    explanation: "Sir Frederick Banting was a Canadian medical scientist who, along with Charles Best, is credited with the discovery of insulin in 1922, a breakthrough that has saved millions of lives worldwide."
  }
];

export const mockStudyTopics: StudyTopic[] = [
  {
    id: 'history-1',
    category: 'History',
    title: 'The First Peoples',
    content: 'Aboriginal peoples have lived in what is now Canada for thousands of years. They consist of First Nations, Inuit, and Métis. First Nations have a history rich with diverse cultures and traditions. The Inuit primarily inhabit the Arctic regions. The Métis are of mixed Aboriginal and European ancestry.',
    imageUrl: 'https://picsum.photos/seed/history1/400/250',
    imageHint: 'indigenous art',
  },
  {
    id: 'gov-1',
    category: 'Government',
    title: 'Canada\'s System of Government',
    content: 'Canada is a parliamentary democracy and a constitutional monarchy. This means we have a Parliament to make our laws and the Queen of Canada as our head of state. There are three levels of government: federal, provincial/territorial, and municipal.',
    imageUrl: 'https://picsum.photos/seed/gov1/400/250',
    imageHint: 'parliament building',
  },
  {
    id: 'rights-1',
    category: 'Rights and Responsibilities',
    title: 'The Canadian Charter of Rights and Freedoms',
    content: 'The Charter protects fundamental freedoms, democratic rights, mobility rights, legal rights, and equality rights for all Canadians. With these rights come responsibilities, such as obeying the law, serving on a jury, and voting in elections.',
    imageUrl: 'https://picsum.photos/seed/rights1/400/250',
    imageHint: 'charter document',
  },
  {
    id: 'symbols-1',
    category: 'Symbols',
    title: 'The National Flag',
    content: 'The red and white Canadian flag with a single red maple leaf was first raised on February 15, 1965. The maple leaf has been a symbol of Canada since the 18th century. Red and white are Canada\'s official colors.',
    imageUrl: 'https://picsum.photos/seed/symbols1/400/250',
    imageHint: 'canadian flag',
  },
  {
    id: 'geo-1',
    category: 'Geography',
    title: 'The Regions of Canada',
    content: 'Canada is the second-largest country in the world and has five distinct regions: the Atlantic Provinces, Central Canada, the Prairie Provinces, the West Coast, and the Northern Territories. Each region has its own unique landscape and economy.',
    imageUrl: 'https://picsum.photos/seed/geo1/400/250',
    imageHint: 'rocky mountains',
  }
];

export const mockUserPerformance: UserPerformance = {
  userId: 'user123',
  totalCorrect: 65,
  totalAnswered: 100,
  categoryPerformance: {
    'History': { correct: 15, total: 25 },
    'Government': { correct: 10, total: 25 },
    'Geography': { correct: 20, total: 20 },
    'Symbols': { correct: 12, total: 15 },
    'Rights and Responsibilities': { correct: 8, total: 15 },
  },
};
