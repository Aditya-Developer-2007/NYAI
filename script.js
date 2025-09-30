    document.addEventListener('DOMContentLoaded', () => {

      const messagesDiv = document.getElementById('messages');
      const userInput = document.getElementById('userInput');
      const sendBtn = document.getElementById('sendBtn');
      const suggestionChips = document.querySelectorAll('.chip');
      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = themeToggle.querySelector('.theme-icon');
      const resetBtn = document.getElementById('resetBtn');
      
       const knowledgeBase = {
      "ipc": {
        definition: "IPC (Indian Penal Code) is the primary criminal code in India detailing offences and penalties.",
        articles: ["Key IPC Sections You Should Know","Evolution of Indian Penal Code","Landmark IPC Cases in India"]
      },
      "fir": {
        definition: "FIR (First Information Report) is the initial report lodged with police for cognizable offences.",
        articles: ["Importance of FIR","How to File an FIR","Supreme Court Guidelines on FIR"]
      },
      "bail": {
        definition: "Bail is conditional release of an accused pending trial, often requiring a guarantee or bond.",
        articles: ["Understanding Bail Procedures","Difference Between Bail and Parole","Supreme Court Judgments on Bail"]
      },
      "constitution": {
        definition: "The Constitution is the supreme law that defines the structure of government and fundamental rights.",
        articles: ["Fundamental Rights in Constitution","Directive Principles Explained","Constitutional Amendments"]
      },
      "rights": {
        definition: "Rights are legal entitlements granted to individuals — e.g., fundamental rights under the Constitution.",
        articles: ["Human Rights in India","Fundamental Rights vs Duties","Landmark Rights Judgments"]
      },
      "evidence": {
        definition: "Evidence includes documents, testimony, and material presented in court to establish facts.",
        articles: ["Types of Evidence in Court","Admissibility of Evidence","Digital Evidence in Law"]
      },
      "contract": {
        definition: "A contract is a legally enforceable agreement between parties with offer, acceptance, and consideration.",
        articles: ["Basics of Contract Law","Types of Contracts","Landmark Contract Law Cases"]
      },
      "criminal": {
        definition: "Criminal law defines offences and prescribes punishments for acts harmful to society.",
        articles: ["Criminal Procedure Code","Stages of Criminal Trial","Recent Criminal Law Reforms"]
      },
      "civil": {
        definition: "Civil law deals with disputes between private parties, such as contracts and property.",
        articles: ["Civil Procedure Code","Civil Rights Cases","Civil vs Criminal Law"]
      },
      "parliament": {
        definition: "Parliament is the legislative body responsible for making laws at the national level.",
        articles: ["Law-Making Process","Role of Rajya Sabha","Recent Parliamentary Bills"]
      },
      "police": {
        definition: "Police enforce law, investigate crimes and maintain public order under legal limits.",
        articles: ["Police Powers","Police Reforms","Citizen Rights vs Police"]
      },
      "privacy": {
        definition: "Privacy law protects personal data and autonomy; includes data protection and surveillance concerns.",
        articles: ["Right to Privacy Judgment","Data Protection Bill","Privacy in Digital Age"]
      },
      "consumer": {
        definition: "Consumer law protects buyers against unfair trade practices and defective goods/services.",
        articles: ["Consumer Protection Act","Rights of Consumers","E-commerce Consumer Rights"]
      },
      "company": {
        definition: "Company law governs formation, management, and regulation of companies and corporate conduct.",
        articles: ["Companies Act Overview","Corporate Governance","LLP vs Pvt Ltd"]
      },
      "tax": {
        definition: "Tax law governs imposition and collection of taxes by government bodies (income tax, GST, etc.).",
        articles: ["Income Tax Basics","GST Explained","Recent Tax Reforms"]
      },
      "environment": {
        definition: "Environment law regulates pollution, conservation, and sustainable use of natural resources.",
        articles: ["Environment Protection Act","Pollution Control Laws","National Green Tribunal"]
      },
      "labour": {
        definition: "Labour law covers worker rights, wages, safety, social security and trade unions.",
        articles: ["New Labour Codes","Minimum Wage Laws","Workers’ Rights in India"]
      },
      "arbitration": {
        definition: "Arbitration is an alternative dispute resolution where parties use an arbitrator instead of courts.",
        articles: ["Arbitration and Conciliation Act","Advantages of Arbitration","International Arbitration"]
      },
      "tort": {
        definition: "Tort law provides remedies for civil wrongs which cause harm or loss to others.",
        articles: ["Basics of Tort Law","Negligence in Tort","Tort vs Crime"]
      },
      "intellectual": {
        definition: "IPR (Intellectual Property Rights) protects creations like patents, trademarks, and copyrights.",
        articles: ["Patent Basics","Copyright Act Explained","Trademark Protection"]
      },
      "human": {
        definition: "Human rights are universal entitlements essential for dignity and freedom of every person.",
        articles: ["Universal Human Rights","Human Rights in India","Role of NHRC"]
      },
      "succession": {
        definition: "Succession law governs inheritance and distribution of deceased persons' property.",
        articles: ["Hindu Succession Act","Intestate Succession","Women’s Inheritance Rights"]
      },
      "bankruptcy": {
        definition: "Bankruptcy/insolvency law manages debt resolution and insolvency proceedings for individuals and companies.",
        articles: ["Insolvency and Bankruptcy Code","Bankruptcy Process","Corporate Insolvency Cases"]
      },
      "probation": {
        definition: "Probation allows offenders to remain under supervision instead of serving full prison terms.",
        articles: ["Probation vs Parole","Conditions of Probation","Rehabilitation Through Probation"]
      },
      "parole": {
        definition: "Parole is conditional release of a prisoner before completion of sentence under supervision.",
        articles: ["Parole Procedures","Parole vs Bail","Notable Parole Cases"]
      },
      "mediation": {
        definition: "Mediation is a facilitated negotiation process to help parties reach an amicable settlement.",
        articles: ["Mediation Techniques","Court-Annexed Mediation","Mediation Advantages"]
      },
      "pocso": {
        definition: "POCSO (Protection of Children from Sexual Offences) Act protects children from sexual abuse.",
        articles: ["Understanding POCSO","Reporting Child Abuse","POCSO Case Studies"]
      },
      "juvenile": {
        definition: "Juvenile law addresses criminal responsibility and rehabilitation of minors.",
        articles: ["Juvenile Justice Act","Child Rehabilitation","Juvenile Courts"]
      },
      "domestic violence": {
        definition: "Domestic violence laws protect victims of abuse within family and intimate relationships.",
        articles: ["Domestic Violence Act","Protection Orders","Support Services for Survivors"]
      },
      "nda": {
        definition: "NDA usually refers to Non-Disclosure Agreements used to protect confidential information.",
        articles: ["NDA Essentials","Drafting NDAs","Enforcing NDAs"]
      },
      "election": {
        definition: "Election law governs electoral processes, campaign finance and representation rules.",
        articles: ["Representation of People Act","Election Commission Role","Electoral Reforms"]
      },
      "traffic": {
        definition: "Traffic law regulates vehicle operation, road safety and associated penalties.",
        articles: ["Motor Vehicles Act","Traffic Offences","Road Safety Measures"]
      },
      "immigration": {
        definition: "Immigration law covers entry, visas, residency and deportation of foreign nationals.",
        articles: ["Visa Types Explained","Immigration Procedures","Refugee Law Basics"]
      },
      "land": {
        definition: "Land law handles ownership, transfers, leases and land acquisition rules.",
        articles: ["Land Acquisition Act","Property Registration","Land Dispute Resolution"]
      },
      "mortgage": {
        definition: "Mortgage law governs property used as security for a loan and rights of mortgagor/mortgagee.",
        articles: ["Types of Mortgages","Mortgage vs Charge","Foreclosure Procedures"]
      },
      "insurance": {
        definition: "Insurance law deals with contracts of indemnity and regulation of insurers/insuree rights.",
        articles: ["IRDA Role","Types of Insurance","Claim Disputes"]
      },
      "medical": {
        definition: "Medical law covers professional standards, negligence and patients' rights.",
        articles: ["Medical Negligence Cases","Patients Rights","Ethics in Healthcare"]
      },
      "contractor": {
        definition: "Laws related to contractors cover contracts for services, liability and payments.",
        articles: ["Contractor Disputes","Payment Recovery","Contract Drafting Tips"]
      },
      "passport": {
        definition: "Passport law governs issuance, renewal and forfeiture of passports.",
        articles: ["Passport Procedures","Grounds for Revocation","Consular Services"]
      },
      "foreign": {
        definition: "Foreign law refers to international legal relations: treaties, extradition and trade.",
        articles: ["Extradition Law Basics","International Treaties","Foreign Trade Regulations"]
      },
      "tribunal": {
        definition: "Tribunals are specialized quasi-judicial bodies for particular disputes (tax, company, NCLT).",
        articles: ["Types of Tribunals","NCLT and NCLAT","Appeals from Tribunals"]
      },
      "writ": {
        definition: "Writs (habeas corpus, mandamus, certiorari, prohibition, quo warranto) are remedies to protect rights.",
        articles: ["Types of Writs","Habeas Corpus Cases","Using Writs Effectively"]
      },
      "legal aid": {
        definition: "Legal aid schemes provide free legal assistance to eligible persons.",
        articles: ["Legal Services Authorities Act","How to Access Legal Aid","Role of Pro Bono Lawyers"]
      },
      "prison": {
        definition: "Prison law governs treatment, rights and rehabilitation of incarcerated persons.",
        articles: ["Prisoner Rights","Prison Reforms","Rehabilitation Programs"]
      },
      "evidence act": {
        definition: "Evidence Act sets rules for admissibility and types of evidence in courts.",
        articles: ["Indian Evidence Act Basics","Documentary Evidence","Witness Examination"]
      },

      "hello":{
        definition:"Namaste 🙏! Main NYAI hoon, aapka legal dost. Kya poochna chahoge?",
        articles:["IPC Basics","Fundamental Rights","FIR Procedure"]
    },
      "hi":{
        definition:"Hi 👋! Kaise ho? Kanoon se related kuch poochna hai?",
        articles:["Indian Constitution","Bail Explained","Rights in India"]
    },
      "hey":{
        definition:"Hey 😃! Batao, kis topic pe baat karni hai?",
        articles:["IPC Sections","Fundamental Rights","Supreme Court Cases"]
    },
      "namaste":{
        
        definition:"Namaste 🙏! Main NYAI hoon, kanoon ko easy banane ke liye.",
        articles:["Intro to Constitution","Your Legal Rights","FIR Basics"]

      },
      "thanks":{
        definition:"Koi baat nahi 😇, main hamesha help ke liye yahan hoon.",
        articles:["What is IPC?","Fundamental Rights","Bail Procedures"]

      },
      "thank you":{
        definition:"Aapka shukriya 🙏! Mujhe khushi hui help karke.",
        articles:["Supreme Court Judgments","Human Rights","Constitution Basics"]

      },
      "good morning":{
        definition:"Good Morning 🌞! Aaj kaun sa legal topic samajhna hai?",
        articles:["Fundamental Rights","IPC Basics","Bail Explained"]

      },
      "good night":{
        definition:"Good Night 🌙! Kal fir se kanoon ki baatein karenge.",
        articles:["Constitution Amendments","Bail Cases","Rights Overview"]

      },
      "ok":{
        definition:"Ok 👍, main ready hoon.",
        articles:["IPC Sections","Fundamental Rights","Legal Rights"]

      },
      "cool":{
        definition:"Cool 😎! Chalo kanoon explore karte hain.",
        articles:["IPC & CrPC","Fundamental Duties","Bail Info"]

      },
      "nice":{
        definition:"Nice 👍! Ab bolo kis bare me jaana hai?",
        articles:["FIR Procedure","Rights Explained","Constitution"]

      },
      "great":{
        definition:"Great 🎉! Main ready hoon aapke legal sawaalon ke liye.",
        articles:["IPC Basics","Human Rights","Supreme Court"]

      },
      "how are you":{
        definition:"Main theek hoon 🤖, aap kaise ho?",
        articles:["Your Rights","Constitution","Bail"]

      },
      "who are you":{
        definition:"Main NYAI hoon, ek Indian Legal AI Assistant.",
        articles:["About IPC","Know Your Rights","Constitution Basics"]

      },
      "your name":{
        definition:"Mera naam NYAI hai ⚖️.",
        articles:["Legal Rights","Supreme Court Cases","Fundamental Duties"]

      },
      "bye":{
        definition:"Bye 👋, apna khayal rakhna!",
        articles:["IPC Summary","Rights in India","Constitution"]

      },
      "see you":{
        definition:"See you soon 👋!",
        articles:["IPC Essentials","Your Rights","Supreme Court"]

      },
      "take care":{
        definition:"Take care 🙏, safe raho.",
        articles:["IPC Law","Constitution","Human Rights"]

      },
      "what’s up":{
        definition:"Sab mast hai 😄, aap batao?",
        articles:["IPC Cases","FIR Info","Rights in India"]

      }
    };
      
      const addMessage = (content, sender = 'bot') => {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = `msg ${sender}`;
        
        if (sender === 'user') {
          messageWrapper.textContent = content;
        } else {
          messageWrapper.innerHTML = content;
        }
        
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const metaDiv = document.createElement('div');
        metaDiv.className = 'meta';
        metaDiv.textContent = timestamp;
        messageWrapper.appendChild(metaDiv);

        messagesDiv.appendChild(messageWrapper);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
      };

      const findResponse = (text) => {
        const lowercasedText = text.toLowerCase().trim();
        for (const key in knowledgeBase) {
          if (lowercasedText.includes(key)) {
            const match = knowledgeBase[key];
            const articlesHtml = match.articles.length > 0
              ? `<br><br>📌 <strong>Related Sections/Articles:</strong><ul class='article-list'>${match.articles.map(a => `<li>${a}</li>`).join("")}</ul>`
              : "";
            return match.definition + articlesHtml;
          }
        }
        return "I’m still learning 🤖. Try asking about 'IPC', 'FIR', or 'Bail'.";
      };

      const handleSendMessage = () => {
        const userText = userInput.value.trim();
        if (!userText) return;
        
        addMessage(userText, 'user');
        userInput.value = '';
        
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'msg bot';
        typingIndicator.innerHTML = 'NYAI is typing…';
        messagesDiv.appendChild(typingIndicator);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        
        setTimeout(() => {
          messagesDiv.removeChild(typingIndicator);
          const botResponse = findResponse(userText);
          addMessage(botResponse, 'bot');
        }, 800);
      };
      
      const applyTheme = (themeName) => {
          document.documentElement.setAttribute('data-theme', themeName);
          themeIcon.textContent = themeName === 'light' ? '🌙' : '☀️';
      };

      const toggleTheme = () => {
          const currentTheme = localStorage.getItem('theme') || 'dark';
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          applyTheme(newTheme);
      };
      
      sendBtn.addEventListener('click', handleSendMessage);
      
      userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault(); 
          handleSendMessage();
        }
      });
      
      suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
          userInput.value = chip.getAttribute('data-q');
          handleSendMessage();
        });
      });

      themeToggle.addEventListener('click', toggleTheme);
      
      resetBtn.addEventListener('click', () => {
        messagesDiv.innerHTML = '';
        
        setTimeout(() => {
          addMessage("Hello! 👋 I'm NYAI. Ask me about legal terms like 'IPC', 'FIR', or 'Bail'.", 'bot');
        }, 300);
      });
            const savedTheme = localStorage.getItem('theme') || 'dark';
      applyTheme(savedTheme);

      setTimeout(() => {
        addMessage("Hello! 👋 I'm NYAI. Ask me about legal terms like 'IPC', 'FIR', or 'Bail'.", 'bot');
      }, 500);

    });