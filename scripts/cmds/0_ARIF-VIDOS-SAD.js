module.exports = {
  config: {
    name: "sad",
    aliases: ["depressed"],
    version: "1.0",
    author: "kshitiz",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "get video to increase your sadness",
    category: "fun",
    guide: "{p}{n}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "loading video...\n to increase your sadness🤡!",
    });

    const link = [
      "https://drive.google.com/uc?export=download&id=1ztNdRo3Wsb5apAK5Nk7qCb5vnTzGooyT",
      "https://drive.google.com/uc?export=download&id=1zkWup1pVPuIvxsuBTNVATTfbscOjmqLx",
      "https://drive.google.com/uc?export=download&id=1zbxLB07ubkzBsJzLOjLnfehPxxwx0Ec3",
      "https://drive.google.com/uc?export=download&id=1zbm-0eIBlZq6QwgKilyLtFqc4NJQklKE",
      "https://drive.google.com/uc?export=download&id=1zIpvNFs998cvNxJCIO5D3PGE8fC-QkLc",
      "https://drive.google.com/uc?export=download&id=1z3fKb3i0FoUbsLZNvTNsQFZDTwy-U-xO",
      "https://drive.google.com/uc?export=download&id=1y6GWa_YvRc3W7huF-7pXCAXrgL5CVWvm",
      "https://drive.google.com/uc?export=download&id=1xqAZVB_9N9ebXD0Yq8owmHCU3kGUOvgW",
      "https://drive.google.com/uc?export=download&id=1xG7RwHxsq1cQLLL8sOoOLcmt3dYH3-2y",
      "https://drive.google.com/uc?export=download&id=1vjSftyqEqU1MT4J35Zs8I9U7odlmDS1i",
      "https://drive.google.com/uc?export=download&id=1vZ7OqlSf_MPp-AGZhIASyfn2GYdbZQQB",
      "https://drive.google.com/uc?export=download&id=1vOW1q5JMKkSV1noK5uu_AVxPZ3AZUlcj",
      "https://drive.google.com/uc?export=download&id=1v5thEILszoNaBdd-rFvfh4n5Okczkmr3",
      "https://drive.google.com/uc?export=download&id=1ulwoVYleuWqdqIvNk6IRkN9yMM73oiQQ",
      "https://drive.google.com/uc?export=download&id=1uVIExxswG2I5rEE2Pv-zH0t12sTWLPQ2",
      "https://drive.google.com/uc?export=download&id=1uCN2x1xIz5O5j37_nTzEqeCJD5_Qz_oa",
      "https://drive.google.com/uc?export=download&id=1tcrVXObD6Ctht-y9wFgfEJhZ5dscWiCb",
      "https://drive.google.com/uc?export=download&id=1rU40wX3aN86lsdtr3aGCAXmx5SYH0cxz",
      "https://drive.google.com/uc?export=download&id=1rK6dE-OE4BIXIlf-WC6hK91azTBSx62z",
      "https://drive.google.com/uc?export=download&id=1r2ClspyQkSGP2RKRg4oE-DmpGNOVDyzU",
      "https://drive.google.com/uc?export=download&id=1qwWqk1-w0unIxUehDtmgse2B013RAwRH",
      "https://drive.google.com/uc?export=download&id=1qqKEw74x5uSeMhyfQQMPI9fXSumffsar",
      "https://drive.google.com/uc?export=download&id=1q8IG-NGNA--6-UkYJsqrVgoR7Aag2709",
      "https://drive.google.com/uc?export=download&id=1pzvCEDmE4_JV86UbM4uYNTmFr-DFtiCi",
      "https://drive.google.com/uc?export=download&id=1pqZAjd0WJxNeMmxcjT0TTj9jUAE3TEbx",
      "https://drive.google.com/uc?export=download&id=1p_qI4J4hKneNrtkGdsNCSY-RTOxf-AG3",
      "https://drive.google.com/uc?export=download&id=1oYwGmqPsW6RSTf6h_MO6I4OnQIB07eCq",
      "https://drive.google.com/uc?export=download&id=1oX7wBYmEtRetmoJrFyFbqzfQ3O8aPMr8",
      "https://drive.google.com/uc?export=download&id=1nfMRrsU0-G-CcjGtEMGY-a0LbjjJYCj-",
      "https://drive.google.com/uc?export=download&id=1nK4h-TGxCF2bnlq9Vig7kRn69tP5tpmY",
      "https://drive.google.com/uc?export=download&id=1n6aZNlcWBNxXJLNp7o5g0SxnJupvxG9h",
      "https://drive.google.com/uc?export=download&id=1mR48-3LBW5BEXRWT7KAOczaCLKj3DAnq",
      "https://drive.google.com/uc?export=download&id=1mKDEeu4oIxgNogBcHRmDweEOpHbgszVm",
      "https://drive.google.com/uc?export=download&id=1m1NXxPpJDCoPdGaylakCsrT_j2b911t9",
      "https://drive.google.com/uc?export=download&id=1lvTc7nkJSwv5vkhCepiNTnJ4qOgNbv6q",
      "https://drive.google.com/uc?export=download&id=1llKrr7IqL_HgCOicIcQxwdJj9new8Smh",
      "https://drive.google.com/uc?export=download&id=1k3kxgrt4sVNuyX9Pifx_QSe-hvqHJYgw",
      "https://drive.google.com/uc?export=download&id=1jkq3WoQdxuMiRVnA8-srjvKsbovc94Im",
      "https://drive.google.com/uc?export=download&id=1jk8l2rpDdzRQx59a3OM2HTs4bkBEF6zZ",
      "https://drive.google.com/uc?export=download&id=1j_sXWNsBgAqHqHXUGSs-hAfGP8iEeLpK",
      "https://drive.google.com/uc?export=download&id=1jUyZEbhc3CqByh1-YUuDusoKt-JUVrTm",
      "https://drive.google.com/uc?export=download&id=1jHtxtQx0Zt8pA_ckkMdFZxBuyVYTLSue",
      "https://drive.google.com/uc?export=download&id=1imVLcSyU13pIMsLVWxo61HPrvzedP7Bg",
      "https://drive.google.com/uc?export=download&id=1ihD_sGR-0dKEYMbexkuXRZUz33Az1-wh",
      "https://drive.google.com/uc?export=download&id=1iHFjAtRcQou5LmU-cZO-Hl_YUkxjjYrB",
      "https://drive.google.com/uc?export=download&id=1hjNQFU39K4ddslSducGukMcDcstRzPv4",
      "https://drive.google.com/uc?export=download&id=1hgeKXyWzmCXZgWImzm5CmRqqd4RPSRXZ",
      "https://drive.google.com/uc?export=download&id=1hUw8czFaie0vPKxbte_C0yMAyRTe__9l",
      "https://drive.google.com/uc?export=download&id=1hNzZ9PnEB7RjSB1T0fj_aiUT2TtB_gbQ",
      "https://drive.google.com/uc?export=download&id=1gjt00ixK_nE8xeO67GZtV5SiYWoFZsHr",
      "https://drive.google.com/uc?export=download&id=1gZTxBTDU0V7D-dtds9J_PWShUiIi8hgK",
      "https://drive.google.com/uc?export=download&id=1gYC3-eBGlBW9gVyjoSfoWdOrmCIFOwSx",
      "https://drive.google.com/uc?export=download&id=1gR828z5uDpoMLxAE3XxMWa-LvUcs4Nnd",
      "https://drive.google.com/uc?export=download&id=1gI65kEaWUnw70DZiJU6BiuF1H88bQkcy",
      "https://drive.google.com/uc?export=download&id=1gChf-o3WSqz7tFYpqneCh_SYrgKnEeTU",
      "https://drive.google.com/uc?export=download&id=1gBQfUL8ajxk7tKiV2LMGKwcKZ1Npl9eh",
      "https://drive.google.com/uc?export=download&id=1fsO2zeMEOmAFFcFF38Wmj13lYV8OwRSF",
      "https://drive.google.com/uc?export=download&id=1fqH1589quD8DaD6dnQtNhk-uCfDdZVqe",
      "https://drive.google.com/uc?export=download&id=1elXNL4oM0FK4FPrXzQsb6olyJN9jfial",
      "https://drive.google.com/uc?export=download&id=1eNPGdNjsH2aiRT0fWj8uhXPBLv8ogMCI",
      "https://drive.google.com/uc?export=download&id=1d13l3vbQWv4nei2M_RKBtybfDa7xjjGO",
      "https://drive.google.com/uc?export=download&id=1ctu0SxGawhXS2rsMDSgoIYxfdyLG1ELo",
      "https://drive.google.com/uc?export=download&id=1cWxCfNcK-LZygC0rt2kYzT_pQVAgkSCf",
      "https://drive.google.com/uc?export=download&id=1bYSBlAU8Zh80kAQRxxRfsWCI7wMGcRfC",
      "https://drive.google.com/uc?export=download&id=1b8qijI_KcVtnOY8_kUKWwZuRE6FHdgue",
      "https://drive.google.com/uc?export=download&id=1b22x9UxBSXbB74Fb51EaZco4dXDrSBjo",
      "https://drive.google.com/uc?export=download&id=1ax0UFqjRdVt3vKM4Xb1LKapfck1BuT_l",
      "https://drive.google.com/uc?export=download&id=1aVFHcK5KotxxfuRMWWurp6pInRpmpiwo",
      "https://drive.google.com/uc?export=download&id=1aBRvsfvUi5bFDpvdE0Ac7qcR3n7je5q8",
      "https://drive.google.com/uc?export=download&id=1a2fsA1e5KiLcTnk_g14_CjPtN-ABw17l",
      "https://drive.google.com/uc?export=download&id=1_qitUL3e5hWSVtWDbZVcmHfvFgpHll_0",
      "https://drive.google.com/uc?export=download&id=1_S_jzgHF9plt-YdY_VzXDykqAsGTvSKr",
      "https://drive.google.com/uc?export=download&id=1-9YY5SHJDY2eYrts-n-Ma4F4J6r_JIhp",
      "https://drive.google.com/uc?export=download&id=1_FvUlWlskVLth8jbf_jLY8aD-YOd5XGK",
      "https://drive.google.com/uc?export=download&id=1ZQE0SElfn9pQuMKxPIyZO_Oz20JQ39ge",
      "https://drive.google.com/uc?export=download&id=1YgAc2g23rCBQGqhdcU_pmnpyOHW4nd2t",
      "https://drive.google.com/uc?export=download&id=1YLAC7wu6W13NrThVySgxInihvJg7Umps",
      "https://drive.google.com/uc?export=download&id=1Y0fhRI2B783ADvPZOVqChJ3w5RLkOtz8",
      "https://drive.google.com/uc?export=download&id=1XMqo9pfJN3emyfLAm63BnZsYrZVVai-3",
      "https://drive.google.com/uc?export=download&id=1XJbi3B2Rgc6x56GAlW2lzV301eVYzhlJ",
      "https://drive.google.com/uc?export=download&id=1WiO2cSv7t5iwjzVeo67tT8aHGSOhWYLv",
      "https://drive.google.com/uc?export=download&id=1WgMMa_TfaXqWtjvYiNtEYhr7XnmEz4Cw",
      "https://drive.google.com/uc?export=download&id=1WdPT_-Fp6w2Bjiw167USGpPe9PpCWNmu",
      "https://drive.google.com/uc?export=download&id=1WOCyeKu09oLdEuUFUpcTY2-VKekAKuRT",
      "https://drive.google.com/uc?export=download&id=1Vs0nEh75CnXDmAyb-edJwmrtovHXLWv-",
      "https://drive.google.com/uc?export=download&id=1VcoyxWPUbApWf4c10X_EDNtDAcoDhTdp",
      "https://drive.google.com/uc?export=download&id=1UxdT2PCjE3HfEEGOPgFzOCVG3bZ-piqF",
      "https://drive.google.com/uc?export=download&id=1Uc3TbCM__QyN-H7_bbrnVGb4R_cW8grV",
      "https://drive.google.com/uc?export=download&id=1UIQrzRShP8yu0k3ZaX5ZT0Sg5Xllg207",
      "https://drive.google.com/uc?export=download&id=1UAiHaXbCwzkPJc-Gk0Q5k3hPqXUjTkiv",
      "https://drive.google.com/uc?export=download&id=1U32sBUoA2yHRarrS7bnQiQXC0WO-H_rl",
      "https://drive.google.com/uc?export=download&id=1U1gjNxHzZ281zOQGNB_svHTmPJ1MT3ye",
      "https://drive.google.com/uc?export=download&id=1SbITatsDqgRduserDSBZSC57_lWvILpF",
      "https://drive.google.com/uc?export=download&id=1RlnxRtr3wMjMCS3Qfwl4WPoRYtxCtv3W",
      "https://drive.google.com/uc?export=download&id=1QdeSRPPNT_j54O38gah8gTYMU7HRcFhU",
      "https://drive.google.com/uc?export=download&id=1QZn8zIq9PCBtVANbSnMi4ntl1TsojF4g",
      "https://drive.google.com/uc?export=download&id=1QYimJmDCwpyqCpwpKe7shqBboaX4cieV",
      "https://drive.google.com/uc?export=download&id=1QFZQhwFe3dJBk_hg3qhdoMZmF193NHya",
      "https://drive.google.com/uc?export=download&id=1PvwzQpS4tDOzww9ZArvjWLDy8K5JmaxY",
      "https://drive.google.com/uc?export=download&id=1PavRaIq7p1EyqQJPptp_CyZHgnh4EUDg",
      "https://drive.google.com/uc?export=download&id=1PBAONla4lwmbznqa-47KYCcwj8gh3SjL",
      "https://drive.google.com/uc?export=download&id=1P1BzvqUOc0929zWoQPPwtnIZzhSs6uEI",
      "https://drive.google.com/uc?export=download&id=1OQP7b4PKQhIzWYDNd0E8vBzvfCcUmfAc",
      "https://drive.google.com/uc?export=download&id=1NmCMmzDSiH-I4Esc3g0n8xlGAW4HbwWT",
      "https://drive.google.com/uc?export=download&id=1N_s9MaXrBIZXNcts_JlUFEnzQV3KtXBI",
      "https://drive.google.com/uc?export=download&id=1NEwq7hoH8i0P3Cb-c_BD9EGTPn1wLA-F",
      "https://drive.google.com/uc?export=download&id=1MIM2GM-sGefXXt3Heau-bhZQyEibJ-GQ",
      "https://drive.google.com/uc?export=download&id=1MAJZH5MRZ7P8rGdawrQZ4MTqzxsKbbeM",
      "https://drive.google.com/uc?export=download&id=1LqAyNAdfNtoX74IMMXjg1dYFQYSDFxF0",
      "https://drive.google.com/uc?export=download&id=1LpxlpvFuTeLKrAU5VvoPdCJVRybGYb9c",
      "https://drive.google.com/uc?export=download&id=1LD0DVaiOygoGJrk9b9cD0IlhoTGoZyqE",
      "https://drive.google.com/uc?export=download&id=1KrBEW3ZBB0ZKGFgK7hfR0wSKrnHOVz7j",
      "https://drive.google.com/uc?export=download&id=1Km3c7cht05g-RsoGxWdWpSvrgF6YFPBz",
      "https://drive.google.com/uc?export=download&id=1KIdxPuufW3ia0AJgpTo5InvWw6eADmKB",
      "https://drive.google.com/uc?export=download&id=1JhwKR1AOzvpP0bNtxOFj6ZoLuViyJlUF",
      "https://drive.google.com/uc?export=download&id=1JUUwpLu_9r5pgwJ47-INXhQKX9DRnoHm",
      "https://drive.google.com/uc?export=download&id=1JQkZtXwxOtXfoEDxlRiy_xIUqRefqtMW",
      "https://drive.google.com/uc?export=download&id=1IvPu8fTVik9M_i9JN2Nfl_LGWQ7lH_9z",
      "https://drive.google.com/uc?export=download&id=1IXZubAlpjnjXDbRnqKMJTl_SlOQE9hR1",
      "https://drive.google.com/uc?export=download&id=1IJyppkCi2BD7LGhXMdlBYLtkehVwYDPi",
      "https://drive.google.com/uc?export=download&id=1IHPHnOteJVFgw6h3d14--fC55u9xnAiT",
      "https://drive.google.com/uc?export=download&id=1IFXH9XM52ArRIYxABzHlNBRmBOIA3A-t",
      "https://drive.google.com/uc?export=download&id=1I6SY2a96SXwbm-rauBH0Ovh_L7XEly3s",
      "https://drive.google.com/uc?export=download&id=1GTkWbVIunxydLaObP6UGa88mtbwEeAaG",
      "https://drive.google.com/uc?export=download&id=1GM-JYpvD-PncQgE6u87BLQYa_ceremJ5",
      "https://drive.google.com/uc?export=download&id=1GKN2UQfm673WxB1U2ePgMq85uPF0bJd-",
      "https://drive.google.com/uc?export=download&id=1G9a7eQprfYLNJ1BLJFcYAi-H54KdFKJ6",
      "https://drive.google.com/uc?export=download&id=1G3ds5lj06u4mVL6KgrSCZLOHP80UKRwm",
      "https://drive.google.com/uc?export=download&id=1Evk0AQ3xtAR5fMzflgav1EbRP9-JZ-48",
      "https://drive.google.com/uc?export=download&id=1Es55Xrb0sk-YMICDPGGnQMQbPFN1uLlJ",
      "https://drive.google.com/uc?export=download&id=1EJvH1wTHW08k5Xf5_dFLp4YcnNbJklgC",
      "https://drive.google.com/uc?export=download&id=1Dy8OuGoamPdmpSZQMonvSUpQL_bz3AFl",
      "https://drive.google.com/uc?export=download&id=1DoK7ffb3IPSdIqDqZkuyusI0C1MEbGVs",
      "https://drive.google.com/uc?export=download&id=1DZOxnTplGUOORysC5yLPgZSWTfmKMl08",
      "https://drive.google.com/uc?export=download&id=1C5y_BZm8dD3Zgulgk4hVdUGrzOQGWRIe",
      "https://drive.google.com/uc?export=download&id=1BV2k_m9-ZLbEVi92SCYMSGOdJDZyq0Qi",
      "https://drive.google.com/uc?export=download&id=1BLa9n84I3p_muhPrtpMoAqEGMMfziFhm",
      "https://drive.google.com/uc?export=download&id=1BKl8Kxu9yLANkxPXk3gBp6Ce31MIg6dH",
      "https://drive.google.com/uc?export=download&id=1BFoFJIY_hMlmIkif3ANt154ZqyWQQN8m",
      "https://drive.google.com/uc?export=download&id=1AqmW_dtp4m2i1u94PperxDmApCA1D762",
      "https://drive.google.com/uc?export=download&id=1AXcE1VssRoIzsUTGQoxi-OO4gIysrrJy",
      "https://drive.google.com/uc?export=download&id=1AAc4kinOxPhcBp0-MPXIxxr0VUAntGLT",
      "https://drive.google.com/uc?export=download&id=19sUJ8TAegJAvUf-w2nfQusuFDWdYHB7e",
      "https://drive.google.com/uc?export=download&id=19pQ8fadcZap0XzGew9psUgp28_RrmVD1",
      "https://drive.google.com/uc?export=download&id=19aerrFl9Ljze-VNENt5dROMe_9naGIPn",
      "https://drive.google.com/uc?export=download&id=192vXAbXS2DFVSr__1I3_zmNbSPTFJ4ZT",
      "https://drive.google.com/uc?export=download&id=18nuRUXUAuPymXPEVUKf_VH86wBJK4p_O",
      "https://drive.google.com/uc?export=download&id=18X82HBRx7dCsKKgKyqBDRfne9s3YjSsa",
      "https://drive.google.com/uc?export=download&id=17shirWF-7fkBH4EHURKOKNDY9cE-MA38",
      "https://drive.google.com/uc?export=download&id=17cKRAYYE-5zp3fTcktRb0TYewqTOX-U4",
      "https://drive.google.com/uc?export=download&id=16aF6solhK0_NA5T9X9frBZxTgshk3KDJ",
      "https://drive.google.com/uc?export=download&id=15wMy_M9MUCF0oRFA5IsU5OWNxUewB0FK",
      "https://drive.google.com/uc?export=download&id=156ed5tiBZ8NQFTEzvco6idTpbotfx1kP",
      "https://drive.google.com/uc?export=download&id=155DrJE5_3vGq-OdU3fgADEjR-4VzG5jy",
      "https://drive.google.com/uc?export=download&id=14hU5bpsaECs0yS3-S3EF-SSpmtZlZxkz",
      "https://drive.google.com/uc?export=download&id=14B_d6cMYq0lP-JfXP9gWAvs65pURWvXR",
      "https://drive.google.com/uc?export=download&id=13iwoPjPiOAtYLaAjEniL4ap_9wO1zXvP",
      "https://drive.google.com/uc?export=download&id=13i5xb4kiilHDsQ1-1063C0p50_GNLRGH",
      "https://drive.google.com/uc?export=download&id=134LTtYx9mPRr9oPrX5tx0kELiB-_ZvyK",
      "https://drive.google.com/uc?export=download&id=12ovo8iBpWgQG_qiy4gl3DkOC9NXIXYRq",
      "https://drive.google.com/uc?export=download&id=12_ks8Ze_R8Hhr-zX3sIZubHlGxuCbwV3",
      "https://drive.google.com/uc?export=download&id=11OIz-qIRh-pQbvRP53cZwWRgez9dd26H",
      "https://drive.google.com/uc?export=download&id=11GEhYeg5hNRxT2bgaFSR2Ef6srAsl7j9",
      "https://drive.google.com/uc?export=download&id=10oExVsbk9c2579uBpw_5iEUtHN2loyXq",
      "https://drive.google.com/uc?export=download&id=10g5pVBY7hQWTw2GS33jRIzt9ZzwsFl2E",
      "https://drive.google.com/uc?export=download&id=10XYg3RgT-xT0vvdPbpSk7-NVUnQeEkF1",
      "https://drive.google.com/uc?export=download&id=10WPJuKPXFzhtCTYvAaTWLawZYe2w-cbw",
      "https://drive.google.com/uc?export=download&id=10QsQQCed7iXIX92SwtClpxOpVQJB_-qy",
      "https://drive.google.com/uc?export=download&id=10OWFbq9L8jElLYSm0PYg69meMDS_MasF",
      "https://drive.google.com/uc?export=download&id=10BpD3WBW-zSJZ-gmwDsbDHkGeRK9GSSd",
      "https://drive.google.com/uc?export=download&id=10Bk9PpxGs_dpdJ2sNw4um5RHkQyik18C",
      "https://drive.google.com/uc?export=download&id=1-SqPBFCrY4EhBVX2FVAk-VMHzo-rkTLz",

    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '♥️ 𝐌𝐀𝐃𝐄 𝐁𝐘 𝐀𝐑𝐈𝐅 ♥️',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};
