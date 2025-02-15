<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJavaScript-logo.png&psig=AOvVaw0ceaUB4Eddx-sOAaMNo6V4&ust=1737895413719000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCayYjzkIsDFQAAAAAdAAAAABAE',
          status: 'Advance'
        },
        {
          id: 5,
          name: 'Laravel',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
          status: 'Advance'
        },
        {
          id: 6,
          name: 'Codeigniter',
          imageUrl: 'https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/codeigniter-logo.png',
          status: 'Intermediate'
        },
        {
          id: 7,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'AlpineJS',
          imageUrl: 'https://avatars.githubusercontent.com/u/59030169?s=200&v=4',
          status: 'Beginner'
        },
        {
          id: 9,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: ' Intermediate'
        },
        {
          id: 10,
          name: 'Tailwind',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          status: 'Advanced'
        },
        {
          id: 11,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Intermediate'
        },
        {
          id: 12,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Advanced'
        },
        {
          id: 13,
          name: 'Flutter',
          imageUrl: 'data:image/png;base64,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',
          status: 'Advanced'
        },
        {
          id: 14,
          imageUrl: 'data:image/png;base64,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',
          name: 'Java',
          status: 'Intermediate'
        },
        {
          id: 15,
          name: 'Kotlin',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/K ,kotlin-logo.svg/1200px-Kotlin-logo.svg.png',
          status: 'Beginner'
        },
        {
          id: 16,
          name: 'Angular',
          imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX////DAC/dADHQADDdAC3DAC3dAC++AADBACTcACbCACjBACDDACvcACroeofdAC7XeobuyM2/ABHAABrcACDbABrmrrXekpz14OPgMkzIMkrVcn/aAAn89PXcAB/bABbNTF/zv8XqiJTncoD+9vfvpa3419v56+2/AAnaAAPwrbXGHz3ytr3ioanhPFTmZnbqvMHkWmztmaLjTGDskpzSYXHMQlf30tbbiJPPVGbfHT7kVmn1xsv65ujkpq7PACbUanjJAADUMku4ZNHtAAALSUlEQVR4nO2daVsaSRSFoaHZUcOSuHQkKiIi0Ykanbhkmf//owa6aOjm3lrvZctT79eZp9JH4Jyq013VuZzH4/F4PB6Px+PxeDwej8fj8Xg8Hg/C896vk+dNX8TqOHwMetVCpdX493DTl7IKri6Pos5+EBTy+bA+vPl6tekLYmb8cN0pBlMmCic06uWnj/1NXxUbZ3fRaTOYIRROqLXL3//Z9KVx8Lx32q0GC+YKY5Gtkw+bvkAasbeUgkCicPKTrLRqu+s7sbdk5QGF+d31nf7oIZp5i0bhbvpOxlv0CoXv/NgZ33ne63Yl8uQKd8d3Ds/3l73FVGHsO5Xt9p2ry5dIKU+jcOY7n7bUdybeco16i5XCWGT56ef2+c7ZN6m32Cqc0Ng233m+UHmLg8L8VvnO4Lyo9hY3hTPfGWxa3tW93ltcFeZnvvO+OXn90S0+b2FTGIssH//8vBF9xt6S5Zelwnw8qVu/7zxf9Iy9JUNv3LKXGPvO7zX6zuC8aeMtaZoPuS81F4lT36mvx3fsvSXzEb7lPjh9iDOR+VX7Tuwt+67ygqD4MhnkpuEqceW+M/UWW+vM0h1NhvnYdleYX6HvfHD1lhSlTjxUPSRJnPrOkNt3CN6SpvMYj/apTlQ4+bbWWvUDNt95J3lLmkisGD6XyQrzfL7Tv6R5S5rqxWzQkwqHxHhSR/Wd8SvVW9JEyfL9kOVDjJn4zhdCiTW4pnpLmknaJzimPk6t7P6D7EeMAoPewv7cUx9jSPii9lgMRhCnfQIl9QFld4G5I74fYdAdpwYmpn6G8Iag8Bvf77BUzYxMTv0FtR8EhXtV/aUb0rnPjMyQ+gmVA4LC+w6XwFKUtXSe1I+pfyIoHJ9yKazuLQ3Nlfr5fPsjQeFzj0thtDy/4kv9FmUS/s6lsPkKxmZL/RZpcsoV+T34EA1b6pdJdwB41hRB8QgZmyn1wzZFYO6WJ/IzaZ/AlPqNY5LCO5ZALDXRwXlSv/adpPCcReFS2ifwpH79X5LCS47IL/VwL+BJ/fpXksKzLoNCkPYJLKnfphVvA45ABGmfwJL6LVohdcUQiM1v0uE5Un9IvOvPoDCSPzLLkfqU9e+UF3LPhqZ9Aj31wzxR4QN5DYymfQI99WtPRIUX1EAsFZXjt6mpX/lNVPhIDcTOpXJ8cuqT1r9TRsQ1cKmnHp+c+vWfRIVvxMivnmv+AWrqt6k3oQ6JkX+tSytq6reoT/oRa29F2icQU59SeAu6pDVwBKZUoDYipn6LKpBWexdvl4fr/wHrDFLqkwpvAan27p0tD3f/Byx2SKlPKrwFlNp7PwDDBb/gLIuy1icV3gJK7X0K0v6tV4D1JiX1yYFPqr2RtH9tFuD36vPQXSGp8BYQam+Y9u/XQSFfBhFJSH1y4JNq7whIOa9OFMLqiJD6tMJb4Bz51Tsw1mlpohCpcN1Tn1Z4C5qukQ/TftyNn6CFvx3n1A/rdIHOtTdM+3j2UEBbatfUJxbeAtfaG6b9YPqFnz4FPYRzOcfUJxbeAsfaG0n7uC+YKqycgP/mmPoVWuEtcKy9YdqLZUr8JDv0B8fUJxbeArfau9SV/KkK+IU5rvWJhbfArfZG1vbB/lxhA05O3VKfWHgL3GpvuLZ/E38psd8CTk7dUp9aeAtcPkMk7V+bKYXIoscp9YccAnOBQ+TDtE++CrM9M3By6pL6Ycii0KH2bsK0T0JnphC5r+mQ+uTCW+BQe/fewCjJvvWZQmS65ZD65MJbYF9777+AQcZJ5iQ7uxCft099hvXvFPva+3QEBpnPbhOFDfgFs099cuEtsK69S6dgjME8cua784agyrVPfYb17xTr2nu2rSLN4rc8V4hMTq1Tn1x4C6xr7wjU0P1onjhzheEQTE6tU59eeAtO7QJxvq1iQWr2vthDisyaLVM/pBfeAsvaG6Z9+l75QiFSV1umPkPhLbCrvVPbKuYXnvolp/YBIw+G2qU+Q+EtsKu9kbRP/4lSCpEFul3qMxTeAqvaG0n7q+vUf0/v5YaTU7vUZwp8y9obSfvMpKigvkKr1GcovAU2tfdsE2WGzGO4aYXI5NQq9ZkC3672RtJ+nJkTZU4cQCanNqnPFPg5q9obpv1S4ZpRiKx+bFIfzhlcMX/aG0n7wXUxTaGRpgw/BfPUJz7hnca89o7gFZ+/HKX57zjNDVwIm6c+S+EtMK69kbS3xzj1WQpvgXHtjaS9Pcapz1J4C0xr7yJMexdMn+ZjKbwFprV3F6a9C6apz1J4CwxrbyztXTBNfZbCW2BYeyNp74Zh6vMU3gKzzzDiCmDD1OcpvAVGtTeS9q4YpX7YYPv3DGtvJO1dMUp9psJbYFJ7I5so3TFJfabCW2BSe/c4T4wxSX229e8Ug9pbua3CHoO1fp1r/TvFoPZWbquwxyD12da/U/S199KRCWQMUp9v/Zszqb0lmyjd0ac+V+Et0B1ysnxkAh196nMGvr72xjZRVosY2TX+jAoSbbrUZyu8BbraG9lEedYrYRRCDKTN0KU+W+Et0NTeWNpL5kH46Z7YdmVN6rMV3gJN7Y0cmfAuMSdcIVYqaVKfNfB1tTeW9rLmQ3JCK1Zfq1OfrfAWqGtvLO1lNx1lp84jXqNOfdbA19Te2JEJY9ksSHbKLuI16tRnDfycuvbG0l663pIpxIozZerzFd4C+KKKxUeIpL3MZ+QKMa9RpT7bHe4ERe2Npb28YZWeBY05hyL1GQtvgaL2vka2PMg/cqlC5BEiVeozFt4C+YeCbaKU+ozqPG/4CJEq9RkLb4G89saOTLh1eYMHNkmRpz5j4S2Q1t5Y2st9RqUQvVkmTX3Gwlsgrb2xtFfdyVGcOo95jTT1GQtvgaz2LpWQ/1kRLSqFmNdIU5+z8BZIFGJHJih8Rv3mAMxrZKlPPdIEgtfe6JEJCp9RK8S8RpL6TE94p8GnYdiRCYfKUkf5riDMa/DUZy28BXjtDTdR6u4YK99vgXkNnvqshbcArb2bcFuF7mFNpULMa/DUJ55hhoHW3siDlmqf0b2jBPMaNPVZC28BVnsjmyg1PqNTiJYvWOozr3+nYLU33ESp8xmdQtRrsNTnXv/m0Nob2USpfzJF8yYdzGuw1OctvAWw9u5gj17oHgrXKESXfQcw9XkLbwGsvZsXewDt41O6tyHVTw4A30EkMhfeAqT2blYB2tvh2vc9VSAw85kLbwHT2d62b7SS/Bl4C2/BiOdFCSwKa2WeDU9LHD5EDGfuMihsDJ9W9aLLtxfaqVEsCsP2zSrf3jVqqla3a1AY1lcwX8vy2KM5Dk1hZch7xwmlf0GyHIrCWvn3et4TePhKsBx3hY3hl/W9Sff5yPn9LK4KV2wwkHHTclciTeEaDAZy72Y5TgrXYjCQ/p6L5TgorJVPNvMi0lzu3cFyrBWu1WAgE8uxPCzaUmHYWrPBQMYlO8uxfB9wbf0GA7GzHBuFldZGDAZiZTnmCmvlg+15w/r7N2PLMVXYGP7Y4OuqEYwtx0xh2DqWn8a/Kc4CI8sxURi2G2t/S7URl12DR/oNFNZb3Pfo+TiPtLaqVbhVBgO5uos0tqprhMs/2G9fMzO4VVuO+u5a63gtLxcncqbsqxQKw3Z+Ow0Gcnkqtxy5wnp7ew0GIrcc6dOX220wkKs7yUwOV9gof992g4FILAdTGO6GwUBQy4EKd8hgIJcdUJEDhbtlMBBgOUsKK2X+x0bWzLLlZE9v2UWDgQweekVUYdh62k2DgaTvyi3O3Gvf7K7BQEbVpfNLJwazktu4G+RxZjmFv8VgIJ/FXblCbDC//waDgcQPAhQmS6SV3YbfPBPLKaz7Ltm6GRX+NoPxeDwej8fj8Xg8Ho/Hsx7+B98oHUeYawuCAAAAAElFTkSuQmCC',
          status: 'Intermediate'
        },
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 5,
          name: 'MongoDB',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 6,
          name: 'Firebase',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 7,
          name: 'Visual Studio Code',
          imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AeswAcsm51+8AeMvt9fsAdMoAdsu/2vAAc8rI4PPE3fHO4vMAcMn1+v3c6/fk8PnU5vVfotoAfc2IuONJlta00u3f7fhpptyhxuh1rd6CtOGqzOsyjNMSgs8ihtCSvuU8kdRWndiKvuWbw+c7kNRyq94Aa8fAC/DtAAAIAUlEQVR4nO2d6XriOgyGE49qT4CwlkJpB2in7dz/HZ4E6GkISSwr8hIef/+noxdJkVc5SaKioqKioqKioqKioqLuQOPHuW8T7GokM/n+27cVFjVSkILK9nfryLGEtBTIfH2XjvwGPEHm++PGt0HcGlUAS8YM3n/5tolVZQ5eC+CuMnIs0waB/Lf+NfVtG4vGsu7BSkY+3kFGjlQL39mRav3k28Keavfgd0aKdNCO1AGeHZmvn4aakSME4AlS7F9mvo2lqDMH646UA8xITIheOVIOzJGGgCdHiiFl5O1IBufI/cvCt+k40QBPjpRvQ8jIMf4j0+RIFXxGmudgjVGJddCMBmWiVXnIE6y+HjxJBEzIAhgyIXaoNlhCcpkYCiFPiAZMyAYYKiFTDoZLOGbKwWAJm1fV7oiQ6ysaLCHHUC1oQs4cDJKQr0wESshYJsIk5P3IBEjIWiZCJGTPwdAI+XOQSLhZ7q1sSnKXCSrhbJsrkBY8byMHCYSzrSpHHCAeuQHthKgp4abgu9gh1ryr5sxDNRrhZplXzFArzkVzK19RQ8LZVlz/zCBfhwCIJbzk3zWi2DEBWstBNOFmKRttyN4eWACt5SCS8Dr/rqTSUX/AXpsvDITTbdZhAYjn3oA2QxRD+NA90gCx7QdoN0RRhKnmJ5Z/+ozhbHuQgzAFNQ4YkIMwhexIBLRaJhgJi2R8pwHamU1YICzHcIS9ZAchmrIRpgDG5x7cALIRFsn4YgboIgdLsRGaTqioM3qAldk/YCRM5WqCByTO6MXbbGX203ASFhMq7BiOGKLldGZqYFApVsLCgi8cIC1EQbwaGpRyExYTqj+ICRXxK6r2G3OD2AmLL4F2DEcEFMspxSB2wqJsfHT/RVoOgvigGcRPWNiy7AQk5aCCEdEgC4RF2ehYFKeFaLZ+oBpkhbBIxrY/SwKE/IVuEIlQH2eQNS+Kk3IQ5JPGoC5RCNVf0P8njWM40lBNHmYag7oNIRCK0QKBqPY3i+KUodrNQpATwt/JBIEIqrYoTglRkPXa44gwmSDcUVsUp6yqqdvBvCvCZIFxiPj8GcNRvqJNyeyMEBWohQ++CzUBsHmX0h0hDhGy84SKkIMtRdUhIS5Qz99CQg7KQ/PAyCVhskCVt+wwHxmXifaZplNCXKCmsDJceOjcfnVLmExQXkT9DlV1baE7JsTloqnEe8eqnWtCZKCaCMTR0KBO9SZkR1Rpd9MS94TJJGOjS8ulLM12pAdCzlxEnO/wQcgXqAD6MzpeCLkQ5QFxzsoPIUugQmeR8E2YYGb9GkB5RPD5I+wdqGqFPO/gjRA16++w4xN7gMwfYbLIyF4Egd9A9khID1SjQwA+CamI8mDSHMgrYZGLhPXCfGl0oNovIaEu4nfGwyA0DlS1Nz2h6pswWRitWMC78Slj74QjIwNgPThC03VR83PUnglxK1NV/b8/PwzCGaEgarb9wyKkAKamRzd9Em6MF34vgszg+o1HwjkV0Oz6jT/Ch32fCSLqtJhfwnkvwHJ+gezt7Ivw4dD3Zgj2xL8nwmlvwFSzXeGZcPqH5W5PwwGVQAinn0yXl773xIMjfGO7nQX5ly5SfRCuOe+Zay+KuSecsgKWkdptknvCd9bNtbSM1M7L/s4J2QHTq/Oy/gm3go2rooBOKqAAQRnPqiBvLRtuCXcoQPE8Np84im1L2XBKiAI8rcSMzfc0Qjj19YIBFOevxkiYn9xTjbsZDgkxgD+bSoRrFldH9D0QPmIAK5tKlFPsoqFsOCM85vo/LvfVTSVCoFZO4Don/NB78GaZcETYQoX86IcQA3hzyj4hFI00rW++OSGcvOoDrnG5fig3SmCr35zImk8eUHKxdpzWyb0n7X/RfvKAdvEp33Ub1CUrd9eur2Jdi5SLafY2pxpkg1B2LiiNKYFapPWYaJCFW7K6NiCkXPyZF3snROwHEtspiPOOuG9CtUIszhMRz8upngmRGyy0XDyXDa+E+E0yateIfOu1awTmDPO3aEWjDJKJv84fqF2HH0TiqWLz5RC2DjymvaJoRcMcka2LEvIMc0WWuurWxUQImosuHhF5CLUXXVoQiYHqnJDeyJSai44J+zSjdRCo/QnNisQNYgCdITW7g7jjBe2yHqj6Dq076IgkzW1IFKLvDq1JMt/ddkm+SKUMzdmpAzg+wpIxb/QjsUjcINKvonARFtn4JW8fNkc2Z9PLai6iO5bP6/kIqneT5B9Ei0XDoOv8fCerXed7FYm6LNZFo5cDKvnI/XKAvQGc4esPD1+nWG1rdNVDlG0bG4Tn2qG7Mk+SraJBeIVl/sVTJOoK5RUWi7JTNEIitFM0giK0kothEdoYwAVGaCEXQyPk/6IGR3j/LzyyD+ACJGSe9YdIyFs0giRkXYELk5CzaARKeP8vjzMWjWAJ2YpGuIRcuRgwIVMHsZAJeRCDJuRokgb/giZEdrltx5NybfxKk2P1CVQQqxfOZWtLMu8lcsFT+ecT76q1LZFyETLYEd5J8yTjQAUpPp+H4b6LzBAL933hX9YKRPgut0X27Z9ZHrh1LGQuFu5b0t/T9CtMoCpxOFrZUHEjHSLIfLDuu6grUKGo7Y9DzL5rtXa5BQnrsMeeWDUHaum+4dR2jW673BbF4W0gQzOcal1uIUsHNDTDqRKooLLP13ty30XfiCBgN7ihGU5ll9vT0OwO3XfRQgpY3qn7LpoMeWgWFRUVFRUVFRUVFRUVFY7+A85AjyTJYV8DAAAAAElFTkSuQmCC',
          status: 'Web Development',
        },
        {
          id: 8,
          name: 'Sublime Text',
          imageUrl: 'data:image/png;base64,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',
          status: 'Exercise and Training',
        },
        {
          id: 9,
          name: 'IntelliJ IDEA',
          imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBEODw0QDQ4PEBoVEA4QDxEPDg4WFxUYGxYSFRUZKCggGB0xGxUVITEhMSkrLi4uFx8zOTMsNygtLisBCgoKDg0OGRAQFy0lHiUrNy8tMC4tLS0tLSsrMS0rNysrLi0tLS8rKysrLS0uKzcuLSsuLystLSsrLTctLSsvLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIECAP/xABKEAABAwECBQ0LDAEFAQAAAAAAAQIDBAURBhIhMTQHExZBUVNhcXKSk7GyFRcyUlRzgZSz0dIUIiMzNUJVdJGhwcIYCGJjgqIk/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIDAQUGBAf/xAA0EQEAAgADAwkHBQEBAQAAAAAAAQIDBBEFFXESITE0UVKRobEiM0FTYYHRExQywfAG4UL/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAPnUzsiY6SRyMYxquc5czURL1UlSk3tFaxzyxa0ViZnoVFhHhpU1TlbE91NT3/NYxVbI5N17ky38CZOPOdXk9m4WDETaOVb69H2c7mc9i4k6VnSPP7o05yqt6qqqudVW9VNrXSOhq7RMzrLBNAAAAAAAAAAAAAAAA+kFQ+NcaOR8bvGY5WL+qEbUreNLRE8Uq3tSdazon2BWGsjpG0tW7HR64sU65HI7aY/dvzIue/PffenP7S2VWKzi4MaadMf3Dd5DaVrWjDxfj0T+VinON6AAAAAAAAAAEH1UrVxIWUjV+dOuNJwMauRPS67mqbjY+BysScWfh0cZ/wDPVrto4mlIpHx9FYHSxLSWqE4lTaoTiVUwEkAAAAAAAAAAAAAAAAi7mRd3bQETomvfBn3P2Q0m5cNud7W7Fm1VSyJqvkejGJnVerhXgOSxMSuHXlXnSHSYeHbEtyaRrLQTYYwItzIpHp43zWovFflNXfbGFE+zWZ8G0psfFmPatEPnszj3h/OaR3zTuT5Jbmv348zZnHvD+c0b5p3J8jc1+/HmbM494fzmjfNO5Pkbmv348zZnHvD+c0b5p3J8jc1+/HmbM494k5zRvmncnyNzX78ebsUmFtM9cV6Phv8AvORFZ+qZv0LMPbGBadLa149Hkqxdk41Y1rpPDpb5r0VMZFRWql6Ki5FTdvNpExMaw1kxMTpKj8KLU+V1cs6LexVxYuBjcjf1yu/7KdflML9HCrT4/Hj/ALmaLMW/UvNv9o1Z64l5LVYLIlVaoTiVNqhOJVTASQAAAAAAAAAAAAAAAAFh4SWk6edyX/RxuVrG7WTIrvSv7XHw/P5mcbFmPhE6R+fv6PsuQy0YOFHbPPP4+3q1J4ntAAABeBhVM6MuN4mkWjRl9qi35qemkga69szVY1Fzx43hK3cyX+lbzoP+VjFxMzOHP8K88/SfhEcZ9Jc/t+uHXC5f/wBzOnHjwhED6VEuJtUJxKq1QnEqbVYLIlVaoTiVNqhOJVTASQAAAAAAAAAAAAAAAJap8CfcgAAvA4qpnRnRhVJaM6MXktGWFUzozo0lpz477tpmROPb93oPoX/PZOMvleXMe1f2p4fDy5/u4nbeY/WzE1jorzff4/j7OmdBEtHaoTiVNqhOJVWqE4lTarBZEqrVCcSptUJxKqYCSAAAAAAAAAAAAAACWnwJ9yYvM6DCqZ0Z0YVTOjOjCqS0ZV3hjhXWUtW+GGRrY2taqIsbHLlairlXhN1kslg4uFFrRz8Whz+exsHGmlJ5uDSbO7R35nRR+49e7sDs85ePeuZ73lBs7tHfWdFH7hu7A7POTeuZ73lDqrhXWb43o2G6jP40c0T5Q1c4cTzyxsrrN8b0bDO8Mft8oR/RobKqzfG9GwzvHH7fKEf22H2Gyqs3xvRsM7yzHb5Qj+1wuw2VVm+N6NhnemY7fKGP2eF2eZsqrN8b0bDO9cz3vKEf2OD2eZsqrN8b0bDO9sz3o8IY3fgdnnJsqrN8b0bDO9813o8IR3bl+zzk2VVm+N6Ng3xmu95QjuvLdnnJsqrN8b0bDO+M13vKDdWW7J8ZNlVZvjejYN8ZrveUG6st2T4ybKqzfG9Gwb4zXe8oN1Zbsnxk2VVm+N6Ng3xmu95Qbqy3ZPjJsqrN8b0bBvjNd7yg3VluyfGXasrCOqknije9qte9EcmI1L0VS/K7UzOJjUpa3NM9kKMzs7Aw8G1qxzxHbKbnVOdAAAAAAlaqfBNH3PRi8lozo4qpnRlhVJaM6MKpnRnRUWqJp8nIZ2EOi2f7iPu5TavWZ+3ojR7mtAAAAAAAAAAAAAAAAADv2DpUHnW9Z68h1nD4w8ud6vfhKzTunHgAAAAAShVPg+j7qwqktGdGLzOjLiqktGdGFUzozoqXVD0+TkM7CHQZD3EfdyW1us2+3ojR7WtWFqXanMdtx1D31b6b5O9rURsaPxsZHLflVLswE5/x+g/FJfV2fEA/x+g/FJfV2fEA/wAfoPxSX1dnxAVjql4IMsasZSMndUI+nbLjuYjFRXPe3FuRV8T9wIkB2rMpUmnhhV2KksrGK5EvVuM5Evu9IF4/4/Qfikvq7PiAqHDiwW2bX1FC2VZmwK1Ekc1Gq7Gja/Ml93hXegDRAAAAAAA79g6VB51vWevIdZw+MPLner34Ss07px4AAAAAElvPhej7uwqmdGdGFUlozoxeZ0ZcbyWjKp9UHT5OQzsIb3I+5hyO1+tW4R6I2exrFm6kOqFR2NHVMqoqmRZ3sczWGRuREajkXGxnN3QLUwZ1XrOtGriooIKxks6qjXSxwtjTFY5y3q16rmau0BYQFX1WrnZUUj4nU1ero3q110VPde1blu+k4AKg1V8LKe161lVTMmjjZTNiVJmsa/Ga+RyqiNc5Lrnpt7oELA2ODem0n5qL2jQPaQHlHVn+3K7lR+wjAhQAAAAAAO/YOlQedb1nryHWcPjDy53q9+ErNO6ceAAAAABI1U+HaPvOjjeZ0ZYVSWjOjCqZ0Z0YVSWjKqNUDTpOQzsIbvJe5hx+1+tW4R6I4etrACa6jX25Q8qT2EgHq4DxVbulVP5iTtqB0QAGxwb02k/NRe0aB7SA8o6s/wBuV3Kj9hGBCgAAAAAAd+wdKg863rPXkOs4fGHlzvV78JWad048AAAAACS1ceJI9niPc39FVP4Pidq6WmOyX3jDty6Vt2xE+L4qo0WaON5nRlhVJaM6MKpnQ0VVh9p0nIZ2ENzk/dQ4/bHWrcI9EdPU1YBNdRr7coeVJ7CQD1cB4qt3Sqn8xJ21A6IADY4N6bSfmovaNA9pAeUdWf7cruVH7CMCFAAAAAAA79g6VB51vWevIdZw+MPLner34Ss07px4AAAABgTDCaLErKhv/Jjc9Ed/Y+OZmumLaPr6877js+3Ly2HP008Ob+mrVSrR7dGFUzozo43ktBhVM6Mqsw7dfXSclvZQ3OWpNcONXGbXmJzdtPp6I8XtYATXUa+3KHlSewkA9XAeKrd0qp/MSdtQOiAA2ODem0n5qL2jQPaQHlHVn+3K7lR+wjAhQAAAAAAO/YOlQedb1nryHWcPjDy53q9+CzTunHgAAAAyYE8w+ixaxV3yJrutv9UPkmdrpi/Z9p2LblZXTsmY9J/tG1U8ujbsKpLQcVUzozo4SPuRVLsDC/UvFUcS3JrMqswz0x/Jb2UN3fpcRtH38/ZoyDwu7QWTVVCOWnpZ6hGrc5YYZJUaq5kXFRbswE51JLArobZopZaGqhja5+NJJTysY2+GREvcqXJlVAPToHj+2cGbRdU1Dm2dWOa6d6oqUsyoqK9blRbgNLXUE9O5GTwS071TGRksbo3Ki3ojrnXLdkXLwAbPYba34RaHqVR8IE51L9S2vlrIKutp30dLTyNlxZUxJpnMW9rEjX5yJeiXqqJkvu4A9HAeQNUa1GVlq1tRGqOjdOrWORb0e2NEY1yLuKjEX0gRsAAAAAAHfsDSoPOt6z15HrOHxh5s57i/BZp3ES5GYCSAAAAZMCytUuK59PJute1V4laqdpT5Vnq89ZfYNgW1riV+sT6oUqni0dDowqktGdHG8loy69S/a3DY5KmkTZ5cxOvMrTDPS38lvZQ9dulx+0+sT9vRoyLwL7/00/UV/nYuy8C6AAADzf8A6i/taL8iz2swHo5mZOIDEsrWNV73NY1qXuc5Ua1qbqquYCnNVXVbgbFJQWZKk00rVZLWRr9FC1cipE5PCcqfeTIl+Rb8wUEAAAAAAABsLA0qDzres9WR6xTjDz5r3N+CzDtolytqhOJVTASQAAGTAtnVJivpo3+JMl/Ajmu/m4+YZyNaRP1fVtgX0x7V7a+kwri88GjrWFUzozo4q4nWus6Muo5b8ptqRFYiIeO0azqrrDPTH8lvZQzLkdq9Zn7ejRmGudqjtKogRUhqJoEd4SRSvjR12a/FXKB2dkNd5fVesy+8BshrvL6r1mX3gNkNd5fVesy+8Dp1dZLM7HmlkmeiXI6R7pHIm5eu1lX9QO3sgrvL6r1mX3gdartCea7Xp5Zrs2uSPku4r1A6wAAAAAAAADYWBpUHnW9Z6sl1inGFGZ9zbgsw7OJc1aoTiVNqhOJVTASQAORgXPhxDj0E12duK7mvaq/tefNcxGuHL6bse/JzlPrrHjE/2qa812juNGLzOjOj5TO2j0YFefVi3Q+R7IlRaqusM9MfyW9lCTjtr9atwj0aMNYAAAAAAAAAAAAAAAAAGwsDSoPOt6z05P39OKnMe6twWadhEuetVgsiVVqhOJU2qE4lVMBJByMC+bZg12mnj23wvanGrVuPnN41rMPoWUxP08el+y0eqkUca3R9G0YVSWg+LlvPTTmhmasFkSptVXWGemP5LeyhZDits9btwj0aMy1YAAAAAAAAAAAAAAAAAbCwNKg863rPTk/f04qsf3duCzTrYlo7VCcSptVgsiVVqhOJU2qE4lVMMmUdHoY+du5UPVRa3I+Pe3uZzXKn8GvmukvpmHfl0rftiJ8ed8XKSrCyIfMsSCUShaqusNNMfyW9lC6vQ4bbfW7cI9GjJNSAAAAAAAAAAAAAAAAAGwsDSoPOt6z0ZT39OKvF/hPBZp1cS09qhOJVWqE4lTarBZEqrVfWkpnzSMhjTGkkcjWpwr/G2LYlcOs3t0QrjDm9orHTK19gtNurzUOX3tjOh3fhJWap71LYWw63XVTEyfSq7noj/wC55Lx7UvoezL8vJ4Vvpp4c39NOqiIe9gyAFdYZ6Y/kt7KF9Ohwm3OuW4R6NGTagAAAAAAAAAAAAAAAAANhYGlQedb1noyvvqcUMT+ErNOoiWstUJxKm1QnEqrVdyyrKnq5NagjWR33lzMYm652ZE67sl5HFzGHg15V50/3wRrg2xJ5NYWrgngjFQ/SOdr1SqXLJdc2NFztYn8514Mxzmd2hfMezHNXs7eLb5XJ1wfannt/uhJTXPYAVPqlQ4teq3fWQsdfure5v9EKMSOd3GwL8rJ6dlpj0n+0VIN0AAK6wz0x/Jb2UL8PocLt3rluEejRk2nWpqM4CUNrRVT6xsquhkYjNbkxMjkcq37uZALH7yVi+JU+sL7gHeSsXxKn1hfcA7yVi+JU+sL7gHeSsXxKn1hfcA7yVi+JU+sL7gHeSsXxKn1hfcBWWrTgTRWR8i+RpInyjXtc1yTH8DWsW7c8NwFYgAAAAAAAbCwNKg863rL8r76vFG/8ZWcdNEvDarBOJU2hJcEcFlrZF116xRMRHKiJ9I/LmS/weP8AbbNTi7bwOXbCwZ5Vo6eyPv8AGeHj8HrjZmLFIxMSNIno7Z/C2LOs+GmjSKCNsUabTdtd1VzqvCpqcXFvi25V51l6aUrSNKw7JWkAAK51V4bpKWS7wmPaq8SsVE/9OKsR1n/NX9jFr9Ynx1/EIGVOmAAFdYZ6Y/kt7KF+H0OF271y3CPRoybTrS1G8PaGyI6plXr1872KzWo0elzUci33ql2dALF7+NjblX0DfiAd/Gxtyr6BvxAO/jY25V9A34gHfxsbcq+gb8QDv42NuVfQN+IB38bG3KvoG/EBWmrNhxRWx8i+Sa7/APPr2ua6xGfWa1i3XKt/gOArMAAAAAAADYWBpUHnW9Zflve14sW6FpQQOetzUvXb3E41Nzms7gZTD/UxraR5z9Ij4oYOVxMe3Jw41n04tzR2e2PKvz37u0nEn8nz7a3/AEmPnNcPC9jD854z/UffV0+R2RhZfS9/at5Rw/PommAf1k3ITrK9g/zvwhHbXu6cU0Olc8AAAEM1UoMalien3KhL+JzHJ14pXidDof8AnL6Zi1e2vpMf1qrApdiAAK6wz0x/Jb2UL8PocLt3rluEejRk2nAAAAAAAAAAAAAAAAADaYLsR1bTNXMszUW7jKsbHtgYdsWvTWNY1XYGHGJi1pPRMrxiiaxMVqIiHD5nNY2ZxJxMa2s/7o7IdhhYNMKvJpGkOR51iUYB/WTchOs6DYP878IabbXu6cU0Olc8AAAEew+gx7PnuzsxX817VX9ryN+htdi4nIztPrrHjE/2p487vQABBcK7MqJap744JHtVrbnNaqotzULqTEQ47bGSzGLmrWpSZjSOiPo1HcSr8ml5ikuVHa1e7c38q3gdxKvyaXmKOVHabtzfyreB3Eq/JpeYo5Udpu3N/Kt4HcSr8ml5imeVBu3N/Kt4HcOr8ll5ijWDd2a+VbwO4dX5LLzFM6sbvzPy58DuHV+TS8xQx+xzPy58DuHV+TS8xTOjH7LMfLnwO4dX5NLzFGksfs8fuT4HcSr8ml5imeTPYx+0xu5PgdxKvyaXmKORbsY/bY3ck7iVfk0vMUzyLdjH7fF7sncSr8ml5ij9O3Yx+hid2TuJV+TS8xTP6V+xj9G/dc48H612RtJM7ijVSnGvXAjlYs8mPqlXL4tp0rWZc9jNf5FP0anm/f5b5keKf7PH7k+DZ4NYP1sdZTyPpJmMbM1XOViojUvzqebOZzL3y961vEzMT8XoyuVxq41Jmk6areOOdSASjAP6ybkJ1nQbB/nfhDTba93Timh0rngAAA6NuU+u0tRFtyQPanGrFRDE9D05PE/TzGHfstE+aikW/KeZ9KlkMAAAAAAABKJQtUJxKm1QnEqrVCcSptVgsiVNqhOJVWqE4lTaoTiVVqsE4lTarv0lnOflfexu595fcaTaG3sLL60wvav5R+ft4rcPKTfntzQ28UTWJitS5Di8xmcXMX5eLbWf90djY0pWkaVhyKEgAAAlGAf1k3ITrOg2D/O/CGm21/CnFNDpXPAAAAAoKqg1uSSLe5HM5rlT+Dyz0vqGHf8AUpW/bET4xq+QSAAAAAAAABKJQtUJxKm1QnEqrVCcSptVgsiVNqhOJVWq+kMLnrc1L1/ZONSvHzWFl6cvEtpHrwVciZ6G3pLPazKvzn7u0nEn8nI7Q21i5jWmH7NPOeP4jzXUwYrzz0u4aRcAAAAABOcCqBY4nTOS5ZrsVF8VL7l9KqvouOs2Llpw8KcS3/16R+XObXzEXxIw4/8An1n8JGblqAAAAAUphdDrdfVNzfS43PRH/wBzz3jnfRNmX5eTwrfTTw5v6agi9wAAAAAAAAAEolC1QnEqbVCcSqtVhScSpmqXYNYDzVN0tRjU8GdG3XTSJwIvgJwrl4Nslymlzm0sPD9nD57eUflOZ8FKRY2xxx6xiJ817PCXlX+Fxrl4TX5zI4Wa579Pa1eDtLHw7TMzrr8J/rsal2Bcl+SoYqcLFRes1E7Bt8MTy/8AWwjbVPjSfFx2Fy7+zmuMbhv8yPBnfWH3J8TYXLv7Oa4bhv8AMjwN9YfcnxNhcu/s5rhuG/zI8DfWH3J8TYXLv7Oa4bhv8yPA31h9yfE2Fy7+zmuG4b/MjwN9U7k+LY2bglFGqOlfr6pmbi4sfpTLf1cB7MtsXCw55WJPK9P/AF5cxtfEvGmHHJ9f/EjNy1AAAAAAFUapVPiV2PdcksLXX7Sql7V/Zrf1QoxI53cbAxOVlOT2WmP7/uUUIN0AAAAAAAAAAAlEoWq7dl2ZPVSa1BGsjtvaaxF+852ZEz/pkvLIePM4+HgU5eJOkevD/cVnYM4FwUl0st1RUJlRyp9HEv8Asau3/uXLuXFjkc7tXEx9a09mvnPH8eqUhqgAAAAAAAAAAAAAAABH8MsHvl0KIxUbURKqxOXMt/hMcu0i3Jl2lRCNq6w2myto/s8X2v4z0/mOHoqOspZIHrFNG6KRM7HpcvGm6nCmQ88xMO7wsWmLXl4dtY7YfEJgAAAAAAAC8Mpbg1gPNUXS1GNTQZ0aqXTyJwIvgJwrl4NssrSfi0W0Nt4WBrTC9q3lH5+3j8Fl2dZ8NNGkUEbY2JtJnVd1VXKq8KlsRo4/HzGJj35eJbWf94O0ZUgAAAAAAAAAAAAAAAAAAjWHmjelSvE6G32L1hUSlLuwAAAAAAACYanP15OnS0O3vcrSL3FgAAAAAAAAAAAAAAAAB//Z',
          status: 'Software Development',
        },
        {
          id: 10,
          name: 'Android Studio',
          imageUrl: 'data:image/png;base64,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',
          status: 'Android Development',
        },
      ]
    };
  }
}
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
            src="ink.png" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; I am Joenathan Haganta Ginting, a Fullstack Developer, Software Engineer, Instructor & Mentor, and Tech Enthusiast with extensive experience in both mobile and web development.

As a technology professional, I have actively contributed as a Mobile Programming Mentor & Instructor at Dunia Coding and an Information Technology Instructor at Superprof. Additionally, I serve as a General Mentor at the CompeteMate GDGOC Gunadarma University competition, guiding participants in enhancing their skills and strategies in programming and software engineering.
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; Currently, I work as a Full-time Mobile Developer while also handling various projects as a Freelance Web Application Developer and Fullstack Web Developer. With a strong technical background, I have earned several professional certifications, including:
✅ Fullstack Web Developer – Rakamin
✅ Mobile Apps Engineer – Amazon Web Services (AWS)
✅ Cloud Engineer – Alibaba Cloud
✅ Software Developer – Microsoft Azure

Beyond software development, I have published several articles on software engineering and received multiple awards in technology Olympiads.

With a passion for knowledge-sharing and continuous growth, I am committed to delivering innovative solutions in technology and helping fellow developers unlock their full potential. 🚀
          </p>
        </div>

      </section>

    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>
