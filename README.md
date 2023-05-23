# FacticeCorporation
Projet universitaire autour d'une application Web développé pour une entre factice (FacticeCorporation) permettant la gestion de rendez-vous entre les employés et les clients de l'entreprise.

# Questionnaire
### Qu’est-ce que Maven ?
Maven est un outil de gestion et d'automatisation de projets logiciels en Java. Il est principalement utilisé pour la gestion des dépendances, mais il peut également gérer la compilation, les tests, la distribution, la documentation, etc.

### Quelle est l’arborescence d’un projet d’une application web utilisant Maven ?
Une structure typique d'un projet Maven peut ressembler à ceci :
```
monprojet/  
├── src/  
│   ├── main/  
│   │   ├── java/ (Contient les classes Java)  
│   │   ├── resources/ (Autres fichiers nécessaires, comme les propriétés)  
│   └── test/ (Contient les classes de test)  
├── target/ (Contient les fichiers générés lors de la compilation)  
├── pom.xml (Fichier de configuration de Maven)  
└── ...  
```

### Indiquer les 3 attributs nécessaires pour décrire un artefact Maven

Les trois attributs principaux nécessaires pour décrire un artefact Maven sont :  

GroupId : C'est l'identifiant unique de l'organisation ou du groupe qui a créé le projet.  
ArtifactId : C'est l'identifiant unique du projet lui-même.  
Version : Ceci représente la version de l'artefact.  

### Citer 2 autres outils « concurrents » de Maven

Deux autres outils concurrents de Maven sont :  
  
Gradle : C'est un autre outil d'automatisation de la construction de logiciels qui est flexible et performant.  
Ant : C'est un outil plus ancien pour la construction de logiciels en Java.  

### Qu’est-ce que le « TDD » ?

TDD signifie "Test Driven Development" (Développement guidé par les tests). C'est une méthode de développement de logiciels où l'écriture des tests est effectuée avant l'écriture du code lui-même. Le processus typique du TDD est le suivant : écrire un test qui échoue, écrire le code pour passer le test, puis refaire le code (si nécessaire) pour l'améliorer.

### Quels sont les principes « SOLID » ?

SOLID est un acronyme pour cinq principes de la programmation orientée objet et de la conception de logiciels :  
  
Single Responsibility Principle (SRP) : une classe doit avoir une seule responsabilité.  
Open-Closed Principle (OCP) : les entités logicielles doivent être ouvertes à l'extension mais fermées à la modification.  
Liskov Substitution Principle (LSP) : les objets d'une classe doivent pouvoir être remplacés par des objets d'une sous-classe sans affecter la correction du programme.  
Interface Segregation Principle (ISP) : de nombreux clients spécifiques valent mieux qu'un client général.  
Dependency Inversion Principle (DIP) : dépendez des abstractions, pas des concretions.  

### Citer 3 serveurs d’applications Java

Apache Tomcat  
JBoss/Wildfly  
IBM WebSphere 

### Dans quel fichier se trouve la configuration des servlets d’une application web ?

La configuration des servlets d'une application web se trouve généralement dans le fichier web.xml, qui est le fichier de déploiement du descripteur pour les applications web Java.

### Quelles sont les 3 directives spécifiées par les spécifications des JSP ? (les citer et indiquer leurs rôles)

<%@ page ... %> : Cette directive est utilisée pour définir des attributs spécifiques à la page comme la langue utilisée, le type de contenu, l'encodage de caractères, etc.  
<%@ include ... %> : Cette directive est utilisée pour inclure le contenu d'un autre fichier dans la page JSP actuelle au moment de la compilation.  
<%@ taglib ... %> : Cette directive est utilisée pour définir une bibliothèque de tags que nous pouvons utiliser dans notre page JSP.  

### Donner une rapide définition de Docker

Docker est une plateforme open source qui permet d'automatiser le déploiement, la mise à l'échelle et la gestion des applications dans des conteneurs. Les conteneurs Docker encapsulent un logiciel dans un fichier système complet qui contient tout ce dont il a besoin pour s'exécuter : code, runtime, outils système, bibliothèques, etc. Cela garantit qu'il fonctionnera toujours de la même manière, quel que soit l'environnement dans lequel il est exécuté.