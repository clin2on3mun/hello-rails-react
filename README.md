
<a name="readme-top"></a>

<div align="center">

  <h1><b>hello rails react</b></h1>

</div>

<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 hello-rails-react ](#-hello-rails-react-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Test](#test)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Hello rails react <a name="about-project"></a>

**Hello rails react** is a project developed by embedding react in rails project through webpack module bundling 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
</details>
<details>
  <summary>Database</summary>
    <li><a href="https://www.postgresql.org/">Postgres</a></li>
</details>
<details>
  <summary>Client</summary>
     <li><a href="https://reactjs.org/">React</a></li>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Webpack**
- **Rails Api**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

- [coming soon......]
## 🚀 Presentation  <a name="Presentation-demo"></a>

- <a href="https://www.loom.com/share/b88cc57b27034ae4979e7931422ed1eb">Presentation</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p> 

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```
    ruby >= 3.0.2
    rails >= 7.0
    postgres >- 15.3
```

### Setup

Clone this repository to your desired folder:

```bash
  git git@github.com:clin2on3mun/hello-rails-react.git
```

You need to setup database for these project

```
  development = hello_rails_react_development
  test        = hello_rails_react_test
```

or you can use your own database and change the `config/database.yml`

```yml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5
  username: [your_username]
  password: [your_password]
  host: localhost

development:
  <<: *default
  database: [your_database_for_development]

test:
  <<: *default
  database: [your_database_for_test]

production:
  <<: *default
  database: [your_database_for_production]
```

### Install

Install this project with:

```bash
  cd hello-rails-react
  bundle install
```

it will install the required gemfile for running the project

### Usage

to use this project:

```ruby
   rails s
```

it will run the the server on `localhost:3000`

### Test

to run test in these this project:

```
   rspec spec/
```

it will run the all the unit test of these project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="author"></a>

👤 **Munana**

- GitHub: [@githubhandle](https://github.com/clin2on3mun)
- Twitter: [@twitterhandle](https://twitter.com/ClintonMunana)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/munana-clinton/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Create Add styles**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project you can share this project to your friend

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for including this in their curriculum.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
